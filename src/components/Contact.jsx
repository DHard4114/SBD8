function Contact() {
    return (
        <div className="mt-8 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-4">
            We’d love to hear from you! Reach out to us for support, inquiries, or feedback.
            </p>
            <div className="text-gray-200 space-y-3">
            <p>Email: <a href="mailto:support@netlab.com" className="hover:text-cyan-400">support@netlab.com</a></p>
            <p>Phone: <span className="hover:text-cyan-400">+62 812 3456 7890</span></p>
            </div>
            <div className="mt-6 text-sm text-gray-400">
            <p>Feel free to reach out, and we’ll get back to you as soon as possible.</p>
            </div>
        </div>
        );
}

export default Contact;
