/**
 * GET /checkOut
 * Home page.
 */
exports.getCheckOut = (req, res) => {
  res.render('checkOut', {
    title: 'Book Check Out',
    apiBaseUrl: apiBaseUrl
  });
};
