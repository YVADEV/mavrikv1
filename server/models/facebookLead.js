import mongoose from 'mongoose';

const facebookLeadSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    facebookAdId: String,
    facebookFormId: String,
    rawData: Object,
}, {
    timestamps: true
});

export default mongoose.model('FacebookLead', facebookLeadSchema);
