/**
 * GET /checkOut
 * Home page.
 */
exports.getCheckIn = (req, res) => {
  res.render('checkIn', {
    title: 'Book Returns',
    apiBaseUrl: apiBaseUrl
  });
};
