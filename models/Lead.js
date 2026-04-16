const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    company: { type: String, required: true },
    website: { type: String },
    socialProfiles: { type: Map, of: String },
    adsSpend: { type: Number },
    seoScore: { type: Number },
    leadQualityScore: { type: Number },
    auditData: { type: Object },
    campaignTracking: { type: Object },
    emailMetrics: { type: Object },
    appointmentBookingStatus: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;