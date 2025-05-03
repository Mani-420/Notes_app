import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
