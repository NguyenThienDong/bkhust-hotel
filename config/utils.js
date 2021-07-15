module.exports = {
	port: process.env.PORT || 4001,
	DB:'mongodb://localhost:27017/bookHotel',
	secret: 'supersecret',
	localDB:'mongodb://localhost:27017/config',
	saltRounds :10,
    regex:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,12})$/

}