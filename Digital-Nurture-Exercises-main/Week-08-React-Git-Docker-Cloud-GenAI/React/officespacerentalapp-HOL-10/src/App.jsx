import React from 'react';

function App() {
  // 1. Single office object to display
  const primaryOffice = {
    name: "Elite Executive Suite",
    rent: 75000,
    address: "Regus Centre, Connaught Place, New Delhi",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
  };

  // 2. List of office objects to display via loop
  const officeSpaces = [
    {
      name: "Co-working Hot Desk",
      rent: 15000,
      address: "Sector 62, Noida, UP",
      imageUrl: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Premium Dedicated Cabin",
      rent: 55000,
      address: "Cyber City, Gurgaon, Haryana",
      imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Corporate Headquarters Suite",
      rent: 120000,
      address: "Bandra Kurla Complex, Mumbai",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Startup Workstation Block",
      rent: 45000,
      address: "Whitefield, Bangalore, Karnataka",
      imageUrl: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, sans-serif", padding: '30px', backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b' }}>
      
      {/* 3. Heading element */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#0f172a', fontWeight: 'bold', margin: '0 0 10px 0' }}>Office Space Rental Portal</h1>
        <p style={{ fontSize: '18px', color: '#64748b', margin: 0 }}>Find the perfect workspace for your business</p>
      </header>

      {/* 4. Single Office Spotlight display */}
      <section style={{ maxWidth: '800px', margin: '0 auto 50px auto', backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 350px', minHeight: '250px' }}>
          {/* Attribute to display the image */}
          <img 
            src={primaryOffice.imageUrl} 
            alt={primaryOffice.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: '1 1 350px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block' }}>Spotlight Listing</span>
          <h2 style={{ fontSize: '28px', color: '#0f172a', margin: '0 0 16px 0' }}>{primaryOffice.name}</h2>
          <p style={{ fontSize: '16px', color: '#475569', margin: '0 0 20px 0', lineHeight: '1.6' }}>
            <strong>Address:</strong> {primaryOffice.address}
          </p>
          <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
            Rent: <span style={{ color: primaryOffice.rent >= 60000 ? '#22c55e' : '#ef4444' }}>
              INR {primaryOffice.rent.toLocaleString()} / month
            </span>
          </div>
        </div>
      </section>

      {/* 5. Listing loop of other workspace items */}
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '24px' }}>Available Spaces</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
          {officeSpaces.map((office, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s' }}
                 onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                 onMouseOut={e => e.currentTarget.style.transform = 'none'}>
              <div style={{ height: '180px' }}>
                <img 
                  src={office.imageUrl} 
                  alt={office.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', color: '#0f172a', margin: '0 0 10px 0' }}>{office.name}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 15px 0', minHeight: '40px' }}>{office.address}</p>
                </div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                  Rent: <span style={{ color: office.rent >= 60000 ? '#22c55e' : '#ef4444' }}>
                    INR {office.rent.toLocaleString()} / month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;
