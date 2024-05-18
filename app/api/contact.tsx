import express from 'express';
import formidable from 'formidable';
import nodemailer from 'nodemailer';

const app = express();

// This function parses the incoming form data
const parseForm = async (req: express.Request): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    const form = formidable({ multiples: true });

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                reject(err);
            } else {
                resolve({ fields, files });
            }
        });
    });
};

// This function handles the form submission
const handleFormSubmission = async (req: express.Request) => {
    try {
        const { fields, files } = await parseForm(req);
        const { name, email, message } = fields;

        let attachment: formidable.File | undefined;

        // Check if 'attachment' is present and is an array
        if (files.attachment && Array.isArray(files.attachment)) {
            attachment = files.attachment[0]; // Access the first file, if it exists
        } else {
            console.error('No attachment found or the structure is not correct');
        }

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-password'
            }
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: Array.isArray(email) ? email.join(',') : email,
            subject: 'Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            attachments: attachment
                ? [{
                    filename: attachment.originalFilename || undefined,
                    path: attachment.filepath
                }]
                : []
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return 'Email sent successfully';
    } catch (error) {
        console.error('Failed to send email:', error);
        return 'Failed to send email';
    }
};

app.post('/submit-form', (req, res) => {
    handleFormSubmission(req)
        .then(response => res.send(response))
        .catch(err => res.status(500).send('Error processing form'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
