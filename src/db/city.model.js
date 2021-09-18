module.exports = (mongoose) => {
    const citySchema = new mongoose.Schema({
        cityId: { type: Number, required: true, unique: true },
        cityName: { type: String, required: true, unique: true },
        createdOn: { type: String, required: true }
    });

    mongoose.model('City', citySchema);
};