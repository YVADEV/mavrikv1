import FacebookLead from '../models/facebookLead.js';

export const createFacebookLead = async (req, res) => {
    try {
        const leadData = req.body;
        
        const newFacebookLead = new FacebookLead({
            name: leadData.name,
            email: leadData.email,
            phone: leadData.phone,
            facebookAdId: leadData.ad_id,
            facebookFormId: leadData.form_id,
            rawData: leadData
        });

        await newFacebookLead.save();

        console.log('New Facebook lead received and saved:', newFacebookLead);

        res.status(201).json({ 
            message: 'Facebook lead received and saved successfully', 
            lead: newFacebookLead 
        });
    } catch (error) {
        console.error('Error saving Facebook lead:', error);
        res.status(500).json({ message: 'Error saving Facebook lead', error: error.message });
    }
};
