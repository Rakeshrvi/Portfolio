
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-50 border-t border-blue-200 py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
                <p>&copy; {new Date().getFullYear()} RAKESH RAVI. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
