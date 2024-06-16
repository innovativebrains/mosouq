import React, { useState } from 'react';
import './index.css';
import { Row, Col } from "react-bootstrap";
import { POST } from '../../apicontrollers/apiController';

import { toast } from "react-toastify";

import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {


  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    phone: '',
    password: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      role: 'user',
    };
    try {
      const response = await POST('user/add-user', dataToSend);
      toast("Your Account Successfully Created")
      navigation("/login");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const countries = [
    { value: '', label: 'Select a country' },
    { value: 'afghanistan', label: 'Afghanistan' },
    { value: 'albania', label: 'Albania' },
    { value: 'algeria', label: 'Algeria' },
    { value: 'andorra', label: 'Andorra' },
    { value: 'angola', label: 'Angola' },
    { value: 'antigua_and_barbuda', label: 'Antigua and Barbuda' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'armenia', label: 'Armenia' },
    { value: 'australia', label: 'Australia' },
    { value: 'austria', label: 'Austria' },
    { value: 'azerbaijan', label: 'Azerbaijan' },
    { value: 'bahamas', label: 'Bahamas' },
    { value: 'bahrain', label: 'Bahrain' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'barbados', label: 'Barbados' },
    { value: 'belarus', label: 'Belarus' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'belize', label: 'Belize' },
    { value: 'benin', label: 'Benin' },
    { value: 'bhutan', label: 'Bhutan' },
    { value: 'bolivia', label: 'Bolivia' },
    { value: 'bosnia_and_herzegovina', label: 'Bosnia and Herzegovina' },
    { value: 'botswana', label: 'Botswana' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'brunei', label: 'Brunei' },
    { value: 'bulgaria', label: 'Bulgaria' },
    { value: 'burkina_faso', label: 'Burkina Faso' },
    { value: 'burundi', label: 'Burundi' },
    { value: 'cabo_verde', label: 'Cabo Verde' },
    { value: 'cambodia', label: 'Cambodia' },
    { value: 'cameroon', label: 'Cameroon' },
    { value: 'canada', label: 'Canada' },
    { value: 'central_african_republic', label: 'Central African Republic' },
    { value: 'chad', label: 'Chad' },
    { value: 'chile', label: 'Chile' },
    { value: 'china', label: 'China' },
    { value: 'colombia', label: 'Colombia' },
    { value: 'comoros', label: 'Comoros' },
    { value: 'congo', label: 'Congo' },
    { value: 'congo_democratic_republic', label: 'Congo (Democratic Republic)' },
    { value: 'costa_rica', label: 'Costa Rica' },
    { value: 'croatia', label: 'Croatia' },
    { value: 'cuba', label: 'Cuba' },
    { value: 'cyprus', label: 'Cyprus' },
    { value: 'czech_republic', label: 'Czech Republic' },
    { value: 'denmark', label: 'Denmark' },
    { value: 'djibouti', label: 'Djibouti' },
    { value: 'dominica', label: 'Dominica' },
    { value: 'dominican_republic', label: 'Dominican Republic' },
    { value: 'east_timor', label: 'East Timor' },
    { value: 'ecuador', label: 'Ecuador' },
    { value: 'egypt', label: 'Egypt' },
    { value: 'el_salvador', label: 'El Salvador' },
    { value: 'equatorial_guinea', label: 'Equatorial Guinea' },
    { value: 'eritrea', label: 'Eritrea' },
    { value: 'estonia', label: 'Estonia' },
    { value: 'eswatini', label: 'Eswatini' },
    { value: 'ethiopia', label: 'Ethiopia' },
    { value: 'fiji', label: 'Fiji' },
    { value: 'finland', label: 'Finland' },
    { value: 'france', label: 'France' },
    { value: 'gabon', label: 'Gabon' },
    { value: 'gambia', label: 'Gambia' },
    { value: 'georgia', label: 'Georgia' },
    { value: 'germany', label: 'Germany' },
    { value: 'ghana', label: 'Ghana' },
    { value: 'greece', label: 'Greece' },
    { value: 'grenada', label: 'Grenada' },
    { value: 'guatemala', label: 'Guatemala' },
    { value: 'guinea', label: 'Guinea' },
    { value: 'guinea_bissau', label: 'Guinea-Bissau' },
    { value: 'guyana', label: 'Guyana' },
    { value: 'haiti', label: 'Haiti' },
    { value: 'honduras', label: 'Honduras' },
    { value: 'hungary', label: 'Hungary' },
    { value: 'iceland', label: 'Iceland' },
    { value: 'india', label: 'India' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'iran', label: 'Iran' },
    { value: 'iraq', label: 'Iraq' },
    { value: 'ireland', label: 'Ireland' },
    { value: 'israel', label: 'Israel' },
    { value: 'italy', label: 'Italy' },
    { value: 'jamaica', label: 'Jamaica' },
    { value: 'japan', label: 'Japan' },
    { value: 'jordan', label: 'Jordan' },
    { value: 'kazakhstan', label: 'Kazakhstan' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'kiribati', label: 'Kiribati' },
    { value: 'korea_north', label: 'Korea (North)' },
    { value: 'korea_south', label: 'Korea (South)' },
    { value: 'kosovo', label: 'Kosovo' },
    { value: 'kuwait', label: 'Kuwait' },
    { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
    { value: 'laos', label: 'Laos' },
    { value: 'latvia', label: 'Latvia' },
    { value: 'lebanon', label: 'Lebanon' },
    { value: 'lesotho', label: 'Lesotho' },
    { value: 'liberia', label: 'Liberia' },
    { value: 'libya', label: 'Libya' },
    { value: 'liechtenstein', label: 'Liechtenstein' },
    { value: 'lithuania', label: 'Lithuania' },
    { value: 'luxembourg', label: 'Luxembourg' },
    { value: 'madagascar', label: 'Madagascar' },
    { value: 'malawi', label: 'Malawi' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'maldives', label: 'Maldives' },
    { value: 'mali', label: 'Mali' },
    { value: 'malta', label: 'Malta' },
    { value: 'marshall_islands', label: 'Marshall Islands' },
    { value: 'mauritania', label: 'Mauritania' },
    { value: 'mauritius', label: 'Mauritius' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'micronesia', label: 'Micronesia' },
    { value: 'moldova', label: 'Moldova' },
    { value: 'monaco', label: 'Monaco' },
    { value: 'mongolia', label: 'Mongolia' },
    { value: 'montenegro', label: 'Montenegro' },
    { value: 'morocco', label: 'Morocco' },
    { value: 'mozambique', label: 'Mozambique' },
    { value: 'myanmar', label: 'Myanmar' },
    { value: 'namibia', label: 'Namibia' },
    { value: 'nauru', label: 'Nauru' },
    { value: 'nepal', label: 'Nepal' },
    { value: 'netherlands', label: 'Netherlands' },
    { value: 'new_zealand', label: 'New Zealand' },
    { value: 'nicaragua', label: 'Nicaragua' },
    { value: 'niger', label: 'Niger' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'north_macedonia', label: 'North Macedonia' },
    { value: 'norway', label: 'Norway' },
    { value: 'oman', label: 'Oman' },
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'palau', label: 'Palau' },
    { value: 'palestine', label: 'Palestine' },
    { value: 'panama', label: 'Panama' },
    { value: 'papua_new_guinea', label: 'Papua New Guinea' },
    { value: 'paraguay', label: 'Paraguay' },
    { value: 'peru', label: 'Peru' },
    { value: 'philippines', label: 'Philippines' },
    { value: 'poland', label: 'Poland' },
    { value: 'portugal', label: 'Portugal' },
    { value: 'qatar', label: 'Qatar' },
    { value: 'romania', label: 'Romania' },
    { value: 'russia', label: 'Russia' },
    { value: 'rwanda', label: 'Rwanda' },
    { value: 'saint_kitts_and_nevis', label: 'Saint Kitts and Nevis' },
    { value: 'saint_lucia', label: 'Saint Lucia' },
    { value: 'saint_vincent_and_the_grenadines', label: 'Saint Vincent and the Grenadines' },
    { value: 'samoa', label: 'Samoa' },
    { value: 'san_marino', label: 'San Marino' },
    { value: 'sao_tome_and_principe', label: 'Sao Tome and Principe' },
    { value: 'saudi_arabia', label: 'Saudi Arabia' },
    { value: 'senegal', label: 'Senegal' },
    { value: 'serbia', label: 'Serbia' },
    { value: 'seychelles', label: 'Seychelles' },
    { value: 'sierra_leone', label: 'Sierra Leone' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'slovakia', label: 'Slovakia' },
    { value: 'slovenia', label: 'Slovenia' },
    { value: 'solomon_islands', label: 'Solomon Islands' },
    { value: 'somalia', label: 'Somalia' },
    { value: 'south_africa', label: 'South Africa' },
    { value: 'south_sudan', label: 'South Sudan' },
    { value: 'spain', label: 'Spain' },
    { value: 'sri_lanka', label: 'Sri Lanka' },
    { value: 'sudan', label: 'Sudan' },
    { value: 'suriname', label: 'Suriname' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'syria', label: 'Syria' },
    { value: 'taiwan', label: 'Taiwan' },
    { value: 'tajikistan', label: 'Tajikistan' },
    { value: 'tanzania', label: 'Tanzania' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'togo', label: 'Togo' },
    { value: 'tonga', label: 'Tonga' },
    { value: 'trinidad_and_tobago', label: 'Trinidad and Tobago' },
    { value: 'tunisia', label: 'Tunisia' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'turkmenistan', label: 'Turkmenistan' },
    { value: 'tuvalu', label: 'Tuvalu' },
    { value: 'uganda', label: 'Uganda' },
    { value: 'ukraine', label: 'Ukraine' },
    { value: 'united_arab_emirates', label: 'United Arab Emirates' },
    { value: 'united_kingdom', label: 'United Kingdom' },
    { value: 'united_states', label: 'United States' },
    { value: 'uruguay', label: 'Uruguay' },
    { value: 'uzbekistan', label: 'Uzbekistan' },
    { value: 'vanuatu', label: 'Vanuatu' },
    { value: 'vatican_city', label: 'Vatican City' },
    { value: 'venezuela', label: 'Venezuela' },
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'yemen', label: 'Yemen' },
    { value: 'zambia', label: 'Zambia' },
    { value: 'zimbabwe', label: 'Zimbabwe' }
  ];


  const labelStyle = {
    color: '#666666',
    fontFamily: 'Figtree',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19.2px',
    textAlign: 'left'
  };

  return (
    <div className="signup-container">
      <div className="signup-left mt-5">
        <h1>Sign Up for Mosoq</h1>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur. Mi Ipsum Diam</p>
        <div className="illustration">
          <img src="/Image Login page.png" alt="blog" />
        </div>
      </div>

      <div style={{ marginTop: "7rem", backgroundColor: '#FAFAFA', height: '1029px', width: "629px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", padding: "2rem" }}>
        <h2 className='text-center mt-5'>Sign Up for Mosoq.</h2>
        <p className='text-center mt-4'>Connect with businesses</p>

        <button className="social-button google" style={{ fontWeight: '400', fontSize: "12px", backgroundColor: 'white', color: "black", border: "1px solid #CECECE" }}>
          <img src="/Social media logo.png" style={{ width: '24px', height: "24px", marginRight: '0.5rem' }} /> Continue with Google
        </button>

        <button className="social-button apple" style={{ fontWeight: '400', fontSize: "12px", backgroundColor: 'white', color: "black", border: "1px solid #CECECE" }}>
          <img src="/apple.png" style={{ width: '24px', height: "24px", marginRight: '0.5rem' }} />  Continue with Apple
        </button>

        <Row className="align-items-center">
          <Col lg={5}>
            <hr />
          </Col>

          <Col lg={2} className="text-center">
            OR
          </Col>

          <Col lg={5}>
            <hr />
          </Col>
        </Row>

        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input
                id="name"
                style={{ width: '100%' }}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className='mt-3'
              />
            </Col>
            <Col>
              <label htmlFor="company" style={labelStyle}>Company Name</label>
              <input
                id="company"
                style={{ width: '100%' }}
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className='mt-3'
              />
            </Col>
          </Row>

          <div style={{ marginTop: '2rem' }}>
            <label htmlFor="email" style={labelStyle}>Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              style={{ width: '100%' }}
              value={formData.email}
              onChange={handleChange}
              className='mt-3'
            />
          </div>

          <Row>
            <Col className='mt-4'>
              <label htmlFor="country" style={labelStyle}>Country</label>
              <select
                id="country"
                name="country"
                style={{
                  width: '266.49px',
                  height: '50px',
                  marginTop: '2rem',
                  borderRadius: '6px',
                  border: '1px solid #66666659',
                  paddingLeft: '15px', // Adjust padding for left alignment of selected value
                  backgroundColor: '#fff', // Optional: set background color for better visibility
                }}
                value={formData.country}
                onChange={handleChange}
                className='mt-3' // additional className for margin-top adjustment
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </Col>

            <Col className='mt-4'>
              <label htmlFor="phone" style={labelStyle}>Phone Number</label>
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Phone Number"
                style={{ width: '100%', marginTop: '2rem' }}
                value={formData.phone}
                onChange={handleChange}
                className='mt-3'
              />
            </Col>
          </Row>

          <div style={{ marginTop: '2rem' }}>
            <label htmlFor="password " style={labelStyle}>Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              style={{ width: '100%', marginTop: '0.5rem' }}
              value={formData.password}
              onChange={handleChange}
              className='mt-3'
            />
          </div>
          <div className="terms" style={{ marginTop: '2rem' }}>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className='mt-3'
            />
            <label htmlFor="terms" style={labelStyle}>
              By creating an account, I agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="signup-button" style={{ marginTop: '2rem' }}>
            Sign up
          </button>
        </form>

        <p className="business-link text-center">Are you a <a href="#" style={{ fontWeight: "500", color: 'black', textDecoration: 'underline' }}>business?</a></p>

      </div>
    </div>
  );
};

export default SignUpForm;
