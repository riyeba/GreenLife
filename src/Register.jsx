import React, { useState, useCallback, useMemo } from 'react';
import { User, Users, Trophy, Heart, MapPin, Globe, Calendar, Ruler, Camera, Plus, Trash2 } from 'lucide-react';

// Countries data
const COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
  { code: 'KW', name: 'Kuwait', flag: '🇰🇼' },
  { code: 'BH', name: 'Bahrain', flag: '🇧🇭' },
  { code: 'OM', name: 'Oman', flag: '🇴🇲' },
  { code: 'JO', name: 'Jordan', flag: '🇯🇴' },
  { code: 'LB', name: 'Lebanon', flag: '🇱🇧' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  { code: 'IR', name: 'Iran', flag: '🇮🇷' },
  { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
  { code: 'SY', name: 'Syria', flag: '🇸🇾' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
  { code: 'LY', name: 'Libya', flag: '🇱🇾' },
  { code: 'TN', name: 'Tunisia', flag: '🇹🇳' },
  { code: 'DZ', name: 'Algeria', flag: '🇩🇿' },
  { code: 'MA', name: 'Morocco', flag: '🇲🇦' },
  { code: 'SD', name: 'Sudan', flag: '🇸🇩' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: 'ET', name: 'Ethiopia', flag: '🇪🇹' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: 'CI', name: 'Côte d\'Ivoire', flag: '🇨🇮' },
  { code: 'SN', name: 'Senegal', flag: '🇸🇳' },
  { code: 'ML', name: 'Mali', flag: '🇲🇱' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: 'UA', name: 'Ukraine', flag: '🇺🇦' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'IS', name: 'Iceland', flag: '🇮🇸' }
];

const SPORTS = [
  'Athletics', 'Badminton', 'Baseball', 'Basketball', 'Boxing', 'Cricket', 
  'Cycling', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Martial Arts', 
  'Other', 'Rugby', 'Swimming', 'Table Tennis', 'Tennis', 'Volleyball', 
  'Weightlifting', 'Wrestling'
];

const CATEGORIES = [
  { id: 'athlete', label: 'Athlete', icon: Trophy, description: 'Professional or amateur sports player' },
  { id: 'coach', label: 'Coach', icon: Users, description: 'Sports coach or trainer' },
  { id: 'scout', label: 'Scout', icon: User, description: 'Talent scout or sports agent' },
  { id: 'fan', label: 'Fan', icon: Heart, description: 'Sports enthusiast and supporter' }
];

// Form configurations
const FORM_CONFIGS = {
  athlete: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'profession', label: 'Profession', type: 'text', required: true, placeholder: 'e.g., Professional Footballer, Amateur Boxer' },
    { name: 'sport', label: 'Sport Name', type: 'select', required: true, options: SPORTS },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true, icon: Calendar },
    { name: 'height', label: 'Height', type: 'height-select', required: true, icon: Ruler },
    { name: 'countryOfResidence', label: 'Country of Residence', type: 'country-select', required: true, options: COUNTRIES, icon: MapPin },
    { name: 'stateOfResidence', label: 'State of Residence', type: 'text', required: true, placeholder: 'Enter your state' },
    { name: 'cityOfResidence', label: 'City of Residence', type: 'text', required: true, placeholder: 'Enter your city' },
    { name: 'fatherNationality', label: "Father's Nationality", type: 'country-select', required: true, options: COUNTRIES, icon: Globe },
    { name: 'motherNationality', label: "Mother's Nationality", type: 'country-select', required: true, options: COUNTRIES, icon: Globe },
    { name: 'youtubeLinks', label: 'YouTube Links (Showcase Your Skills)', type: 'youtube-links', placeholder: 'Enter YouTube link' },
    { name: 'aboutYourself', label: 'Write about yourself', type: 'textarea', required: true, rows: 4, placeholder: 'Tell us about your sports journey, achievements, and goals...' },
    { name: 'highlights', label: 'Highlights/Achievements', type: 'textarea', rows: 3, placeholder: 'List your major achievements, awards, or career highlights...' }
  ],
  coach: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'currentTeam', label: 'Current Team/Organization', type: 'text', required: true, placeholder: 'e.g., Lagos United FC, Independent Coach' },
    { name: 'profession', label: 'Profession', type: 'text', required: true, placeholder: 'e.g., Head Coach, Assistant Coach, Youth Coach' },
    { name: 'coachingSport', label: 'Coaching Sport', type: 'select', required: true, options: SPORTS },
    { name: 'aboutYourself', label: 'Write about yourself', type: 'textarea', required: true, rows: 4, placeholder: 'Tell us about your coaching philosophy, experience, and approach...' },
    { name: 'coachingExperience', label: 'Coaching Experience/History', type: 'textarea', required: true, rows: 4, placeholder: 'Describe your coaching history, teams, achievements, certifications...' }
  ],
  scout: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'currentCompany', label: 'Current Company/Organization', type: 'text', required: true, placeholder: 'e.g., SportsTalent Agency, Independent Scout' },
    { name: 'profession', label: 'Profession', type: 'text', required: true, placeholder: 'e.g., Talent Scout, Sports Agent, Recruiting Director' },
    { name: 'scoutingSport', label: 'Scouting Sport', type: 'select', required: true, options: SPORTS },
    { name: 'aboutYourself', label: 'Write about yourself', type: 'textarea', required: true, rows: 4, placeholder: 'Tell us about your scouting experience, what you look for in athletes...' }
  ],
  fan: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'Enter your first name' },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Enter your last name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email' },
    { name: 'favoriteSport', label: 'Favorite Sport', type: 'select', options: SPORTS }
  ]
};

// Simple text input component
const SimpleTextInput = ({ id, type = 'text', value, onChange, placeholder, className, style, min, max, rows }) => {
  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
        style={style}
        rows={rows}
      />
    );
  }

  return (
    <input
      id={id}
      type={type}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      style={style}
      min={min}
      max={max}
    />
  );
};

// Simple select component  
const SimpleSelectInput = ({ id, value, onChange, options, placeholder, className, style }) => {
  return (
    <select
      id={id}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      style={style}
    >
      <option value="">{placeholder}</option>
      {options?.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

// Simple country select component
const SimpleCountrySelect = ({ id, value, onChange, options, placeholder, className, style }) => {
  return (
    <select
      id={id}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      style={style}
    >
      <option value="">{placeholder}</option>
      {options?.map(country => (
        <option key={country.code} value={country.name}>
          {country.flag} {country.name}
        </option>
      ))}
    </select>
  );
};

// Height component
const HeightInput = ({ value, onChange, IconComponent }) => {
  const [unit, setUnit] = useState('cm');
  const [showUnitMenu, setShowUnitMenu] = useState(false);
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [cm, setCm] = useState('');

  const heightUnits = [
    { value: 'cm', label: 'Centimeters (cm)' },
    { value: 'ft', label: 'Feet & Inches (ft/in)' },
  ];

  React.useEffect(() => {
    if (value && typeof value === 'object') {
      setUnit(value.unit || 'cm');
      if (value.unit === 'ft') {
        setFeet(value.feet || '');
        setInches(value.inches || '');
      } else {
        setCm(value.cm || '');
      }
    }
  }, [value]);

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    setShowUnitMenu(false);
    if (newUnit === 'cm') {
      onChange({ unit: newUnit, cm });
    } else {
      onChange({ unit: newUnit, feet, inches });
    }
  };

  const handleFeetChange = (newFeet) => {
    setFeet(newFeet);
    onChange({ unit: 'ft', feet: newFeet, inches });
  };

  const handleInchesChange = (newInches) => {
    setInches(newInches);
    onChange({ unit: 'ft', feet, inches: newInches });
  };

  const handleCmChange = (newCm) => {
    setCm(newCm);
    onChange({ unit: 'cm', cm: newCm });
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowUnitMenu(!showUnitMenu)}
          className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent hover:bg-gray-50 transition-colors"
          style={{ fontSize: '16px' }}
        >
          <div className="flex justify-between items-center">
            <span>{heightUnits.find(u => u.value === unit)?.label || 'Choose Height Unit'}</span>
            <svg
              className={`w-5 h-5 transition-transform ${showUnitMenu ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {showUnitMenu && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            {heightUnits.map((unitOption) => (
              <button
                key={unitOption.value}
                type="button"
                onClick={() => handleUnitChange(unitOption.value)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                  unit === unitOption.value ? 'bg-green-50 text-green-600' : 'text-gray-700'
                } ${unitOption.value === heightUnits[0].value ? 'rounded-t-lg' : ''} ${
                  unitOption.value === heightUnits[heightUnits.length - 1].value ? 'rounded-b-lg' : ''
                }`}
                style={{ fontSize: '16px' }}
              >
                {unitOption.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="relative">
        {IconComponent && (
          <IconComponent 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" 
          />
        )}
        
        {unit === 'cm' ? (
          <SimpleTextInput
            type="number"
            min="100"
            max="250"
            value={cm}
            onChange={handleCmChange}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${IconComponent ? 'pl-10' : ''}`}
            placeholder="Enter height in centimeters (e.g., 170)"
            style={{ fontSize: '16px' }}
          />
        ) : (
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <SimpleTextInput
                type="number"
                min="3"
                max="8"
                value={feet}
                onChange={handleFeetChange}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${IconComponent ? 'pl-10' : 'pr-12'}`}
                placeholder="5"
                style={{ fontSize: '16px' }}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">ft</span>
            </div>
            <div className="flex-1 relative">
              <SimpleTextInput
                type="number"
                min="0"
                max="11"
                value={inches}
                onChange={handleInchesChange}
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="8"
                style={{ fontSize: '16px' }}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">in</span>
            </div>
          </div>
        )}
      </div>

      {showUnitMenu && (
        <div 
          className="fixed inset-0 z-5" 
          onClick={() => setShowUnitMenu(false)}
        />
      )}
    </div>
  );
};

// YouTube links component
const YouTubeLinksInput = ({ value, onChange }) => {
  const links = value || [''];

  const addLink = () => {
    onChange([...links, '']);
  };

  const removeLink = (index) => {
    if (links.length > 1) {
      const newLinks = links.filter((_, i) => i !== index);
      onChange(newLinks);
    }
  };

  const updateLink = (index, newValue) => {
    const newLinks = [...links];
    newLinks[index] = newValue;
    onChange(newLinks);
  };

  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <div key={index} className="flex gap-2 items-center">
          <SimpleTextInput
            type="url"
            value={link}
            onChange={(newValue) => updateLink(index, newValue)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="https://youtube.com/watch?v=..."
            style={{ fontSize: '16px' }}
          />
          {links.length > 1 && (
            <button
              type="button"
              onClick={() => removeLink(index)}
              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              title="Remove link"
            >
              <Trash2 size={18} />
            </button>
          )}
          {index === links.length - 1 && (
            <button
              type="button"
              onClick={addLink}
              className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
              title="Add another link"
            >
              <Plus size={18} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

// Main form field component
const FormField = ({ field, value, onChange }) => {
  const fieldId = `${field.name}-input`;
  const IconComponent = field.icon;
  const baseClasses = `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${IconComponent && field.type !== 'height-select' ? 'pl-10' : ''}`;
  
  const handleFieldChange = (newValue) => {
    onChange(field.name, newValue);
  };

  const inputStyle = { fontSize: '16px' };
  const textareaStyle = { fontSize: '16px', resize: 'vertical' };

  let inputElement;
  switch (field.type) {
    case 'textarea':
      inputElement = (
        <SimpleTextInput
          id={fieldId}
          type="textarea"
          rows={field.rows || 4}
          value={value}
          onChange={handleFieldChange}
          className={baseClasses}
          placeholder={field.placeholder}
          style={textareaStyle}
        />
      );
      break;
    
    case 'select':
      inputElement = (
        <SimpleSelectInput
          id={fieldId}
          value={value}
          onChange={handleFieldChange}
          options={field.options}
          placeholder={field.placeholder || `Select ${field.label.toLowerCase()}`}
          className={baseClasses}
          style={inputStyle}
        />
      );
      break;

    case 'country-select':
      inputElement = (
        <SimpleCountrySelect
          id={fieldId}
          value={value}
          onChange={handleFieldChange}
          options={field.options}
          placeholder={field.placeholder || `Select ${field.label.toLowerCase()}`}
          className={baseClasses}
          style={inputStyle}
        />
      );
      break;

    case 'height-select':
      inputElement = (
        <HeightInput 
          value={value} 
          onChange={handleFieldChange}
          IconComponent={IconComponent}
        />
      );
      break;

    case 'youtube-links':
      inputElement = (
        <YouTubeLinksInput
          value={value}
          onChange={handleFieldChange}
        />
      );
      break;
    
    default:
      inputElement = (
        <SimpleTextInput
          id={fieldId}
          type={field.type}
          min={field.min}
          max={field.max}
          value={value}
          onChange={handleFieldChange}
          className={baseClasses}
          placeholder={field.placeholder}
          style={inputStyle}
        />
      );
      break;
  }

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-2">
        {field.label} {field.required && '*'}
      </label>
      <div className="relative">
        {IconComponent && field.type !== 'height-select' && (
          <IconComponent 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          />
        )}
        {inputElement}
      </div>
    </div>
  );
};

// Photo upload component
const PhotoUpload = ({ onChange, id, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Profile Photo
    </label>
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
      <Camera size={48} className="mx-auto text-gray-400 mb-4" />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id={id}
        onChange={(e) => onChange('profilePhoto', e.target.files?.[0])}
      />
      <label htmlFor={id} className="cursor-pointer">
        <span className="text-green-600 hover:text-green-700 font-medium">
          Upload a photo
        </span>
        <span className="text-gray-500"> or drag and drop</span>
      </label>
      <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
      {value && <p className="text-xs text-green-600 mt-1">File selected: {value.name}</p>}
    </div>
  </div>
);

// Category card component
const CategoryCard = ({ category, onClick }) => {
  const IconComponent = category.icon;
  
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-green-500 p-6 text-center"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <IconComponent size={32} className="text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.label}</h3>
      <p className="text-sm text-gray-600">{category.description}</p>
    </div>
  );
};

// Main component
const SportsRegistration = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get current form config
  const currentFormConfig = FORM_CONFIGS[selectedCategory] || [];

  // Get required fields
  const requiredFields = currentFormConfig.filter(field => field.required).map(field => field.name);

  // Handle input changes
  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setFormData({});
  };

  // Validate form
  const validateForm = () => {
    const missingFields = requiredFields.filter(field => {
      const value = formData[field];
      return !value || (typeof value === 'string' && value.trim() === '');
    });
    return missingFields;
  };

  // Handle form submission
  const handleSubmit = async () => {    
    const missingFields = validateForm();
    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', { 
        category: selectedCategory, 
        data: formData,
        timestamp: new Date().toISOString()
      });
      
      alert('Registration submitted successfully!');
      
      setFormData({});
      setSelectedCategory('');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form reset
  const handleReset = () => {
    setSelectedCategory('');
    setFormData({});
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Join GreenLeaf
              </h1>
              <p className="text-lg text-gray-600">
                Choose your category to get started
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => handleCategorySelect(category.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Form view
  const categoryLabel = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
  const gridFields = currentFormConfig.filter(field => field.type !== 'textarea');
  const textareaFields = currentFormConfig.filter(field => field.type === 'textarea');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <button
              onClick={handleReset}
              className="text-green-600 hover:text-green-700 mb-4 inline-flex items-center text-sm font-medium transition-colors"
              type="button"
            >
              ← Back to categories
            </button>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {categoryLabel} Registration
            </h1>
            <p className="text-lg text-gray-600">
              Fill in your details to join our sports community
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <div className="space-y-6">
              {gridFields.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {gridFields.map((field) => (
                    <FormField
                      key={field.name}
                      field={field}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                    />
                  ))}
                </div>
              )}

              {textareaFields.map((field) => (
                <FormField
                  key={field.name}
                  field={field}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              ))}

              <PhotoUpload
                onChange={handleInputChange}
                id={`${selectedCategory}-photo`}
                value={formData.profilePhoto}
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Complete Registration'}
              </button>
              <button
                onClick={handleReset}
                disabled={isSubmitting}
                className="sm:flex-none bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              By registering, you agree to our{' '}
              <a 
                href="#" 
                className="text-green-600 hover:text-green-700 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a 
                href="#" 
                className="text-green-600 hover:text-green-700 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsRegistration;