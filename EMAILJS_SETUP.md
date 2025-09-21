# EmailJS Setup Instructions

## 📧 How to Configure Email Functionality

Your contact form is ready to send real emails! Follow these steps to set up EmailJS:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (up to 200 emails/month)

### 2. Add Email Service
- Go to **Email Services** in your EmailJS dashboard
- Click **Add New Service**
- Choose **Gmail** (recommended) or any other provider
- Follow the authentication steps

### 3. Create Email Template
- Go to **Email Templates** in your dashboard
- Click **Create New Template**
- Use this template structure:

```
Subject: New Contact Form Submission: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### 4. Get Your Keys
- **Service ID**: From Email Services section
- **Template ID**: From Email Templates section  
- **Public Key**: From Account > API Keys

### 5. Update Environment Variables
Update the `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test Your Contact Form
- Restart your development server: `npm run dev`
- Fill out the contact form on your portfolio
- Check your email inbox for the message!

## 🔒 Security Notes
- The `.env` file is already added to `.gitignore`
- Never commit your actual API keys to version control
- EmailJS public keys are safe to use in frontend applications

## 🚀 Ready to Go!
Your contact form will now send real emails directly from your portfolio website!