const validator = require('validator');
const uuid = require('uuid/v1');
const request = require("request");


/**
 * GET /contact
 * Contact form page.
 */
exports.getGenerateQr = (req, res) => {
  const unknownUser = !(req.user);

  res.render('generateQr', {
    title: 'Book Qr Code Creator',
    unknownUser,
  });
};

/**
 * POST /contact
 */
exports.postGenerateQr = (req, res) => {
  const validationErrors = [];
  let bookName;
  let bookId = uuid()
  if (validator.isEmpty(req.body.name)) validationErrors.push({ msg: 'Please enter your name' });
  
  if (validationErrors.length) {
    req.flash('errors', validationErrors);
    return res.redirect('/generateQr');
  }

  var payload = {
    "Book" : {
      "id" : bookId,
      "name" : req.body.name,
      "tags" : req.body.tags.split(",")
    }
  }


  request.post(apiBaseUrl + "/generateQrCodeForBook",{json:true,body:payload}, function (err,httpResponse,body) {
   
    res.render('showQr', {
      title: 'Book Qr Code',
      name: req.body.name,
      tags: req.body.tags.split(","),
      image: body.statusMessage
    });
  });
};
