const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    campaignName: { type: String, required: true },
    campaignType: { type: String, enum: ['SEO', 'GoogleAds', 'MetaAds', 'WebsiteDevelopment'], required: true },
    description: { type: String, required: true },
    leadsCount: { type: Number, default: 0 },
    status: { type: String, required: true },
    emailTemplate: { type: String, required: true },
    followUpSequence: [{ type: String }],
    dates: { type: [Date] },
    metrics: {
        emailsSent: { type: Number, default: 0 },
        emailsOpened: { type: Number, default: 0 },
        clickThrough: { type: Number, default: 0 },
        appointmentsBooked: { type: Number, default: 0 },
        conversionRate: { type: Number, default: 0 }
    }
});

module.exports = mongoose.model('Campaign', campaignSchema);