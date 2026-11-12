import React, { useState } from 'react';
import { 
  Gift, Heart, Sparkles, ShieldCheck, Search, ShoppingBag, 
  Calendar, Rotate3d, ArrowRight, Check, X, Star, ExternalLink, 
  ChevronRight, Lock, Mail, Phone, RefreshCw, Bookmark
} from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authStep, setAuthStep] = useState('login'); // 'login' | 'otp'
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  
  const [step, setStep] = useState(1); // 1: Relationship, 2: Memory/Preferences, 3: Recommendations
  const [selectedRelationship, setSelectedRelationship] = useState('');
  const [memory, setMemory] = useState('');
  const [interests, setInterests] = useState([]);
  const [selectedColor, setSelectedColor] = useState('Lavender');
  const [budget, setBudget] = useState(2500);
  
  const [activeTab, setActiveTab] = useState('finder'); // 'finder' | 'studio' | 'wishlist' | 'reminders'
  const [wishlist, setWishlist] = useState([]);
  const [reminders, setReminders] = useState([
    { id: 1, name: "Mom's Birthday", date: "2026-05-14", daysLeft: 42 },
    { id: 2, name: "Best Friend Anniversary", date: "2026-06-20", daysLeft: 79 }
  ]);

  const relationships = [
    { id: 'mother', name: 'Mother', icon: '👩‍👧' },
    { id: 'father', name: 'Father', icon: '👨‍👦' },
    { id: 'girlfriend', name: 'Girlfriend', icon: '❤️' },
    { id: 'boyfriend', name: 'Boyfriend', icon: '💙' },
    { id: 'sister', name: 'Sister', icon: '👧' },
    { id: 'brother', name: 'Brother', icon: '👦' },
    { id: 'parents', name: 'Parents', icon: '💑' },
    { id: 'bestfriend', name: 'Best Friend', icon: '🤝' },
    { id: 'teacher', name: 'Teacher', icon: '📚' },
    { id: 'aunt', name: 'Aunt / Uncle', icon: '🌟' }
  ];

  const interestOptions = ['Gadgets & Tech', 'Books & Writing', 'Fashion & Style', 'Home Decor', 'Handmade & Scrapbooks', 'Gourmet Chocolates', 'Fitness & Wellness'];

  const colorOptions = [
    { name: 'Lavender', hex: '#EDE9FE' },
    { name: 'Rose Gold', hex: '#FBCFE8' },
    { name: 'Classic White', hex: '#FFFFFF' },
    { name: 'Sage Green', hex: '#D1FAE5' },
    { name: 'Midnight Blue', hex: '#1E1B4B' }
  ];

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!identifier) return;
    setAuthStep('otp');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === '123456' || otp.length === 6) {
      setIsAuthenticated(true);
    } else {
      alert('Please enter a valid 6-digit OTP (hint: use 123456)');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome to Giftology</h1>
            <p className="text-slate-500 text-sm mt-1">The Perfect Gift Finder with AI Personalization</p>
          </div>

          {authStep === 'login' ? (
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Email or Phone Number</label>
                <div className="relative">
                  <input 
                    type="text" 
                    required
                    placeholder="Enter email or mobile number" 
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition"
                  />
                  <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 transition">
                Send OTP Verification
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="text-center mb-4">
                <p className="text-sm text-slate-600">Enter the 6-digit OTP sent to <span className="font-semibold text-slate-900">{identifier}</span></p>
                <button type="button" onClick={() => setAuthStep('login')} className="text-xs text-purple-600 underline mt-1">Change number/email</button>
              </div>
              <div>
                <input 
                  type="text" 
                  maxLength="6"
                  required
                  placeholder="1 2 3 4 5 6" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full text-center text-2xl tracking-widest py-3 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition font-mono"
                />
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => setOtp('123456')} className="flex-1 py-2 bg-purple-50 text-purple-700 text-xs font-semibold rounded-lg hover:bg-purple-100 transition">
                  Use Demo OTP (123456)
                </button>
              </div>
              <button type="submit" className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 transition">
                Verify & Continue
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7FF] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setActiveTab('finder'); setStep(1); }}>
            <div className="w-10 h-10 bg-purple-700 text-white rounded-xl flex items-center justify-center shadow-md">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">Giftology</span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-wide uppercase">The Perfect Gift Finder</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <button onClick={() => setActiveTab('finder')} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === 'finder' ? 'bg-purple-50 text-purple-700' : 'text-slate-600 hover:bg-slate-50'}`}>Find Gifts</button>
            <button onClick={() => setActiveTab('studio')} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === 'studio' ? 'bg-purple-50 text-purple-700' : 'text-slate-600 hover:bg-slate-50'}`}>3D Studio</button>
            <button onClick={() => setActiveTab('wishlist')} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === 'wishlist' ? 'bg-purple-50 text-purple-700' : 'text-slate-600 hover:bg-slate-50'}`}>Wish List ({wishlist.length})</button>
            <button onClick={() => setActiveTab('reminders')} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === 'reminders' ? 'bg-purple-50 text-purple-700' : 'text-slate-600 hover:bg-slate-50'}`}>Reminders</button>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm">
              {identifier[0]?.toUpperCase() || 'U'}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        {activeTab === 'finder' && (
          <div>
            {step === 1 && (
              <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-purple-100">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Step 1 of 3</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Who is this gift for?</h2>
                  <p className="text-slate-500 text-sm mt-1">Select a relationship to tailor personalized recommendations.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {relationships.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => setSelectedRelationship(rel.name)}
                      className={`p-4 rounded-2xl border-2 text-left transition flex items-center space-x-3 ${selectedRelationship === rel.name ? 'border-purple-600 bg-purple-50/50 shadow-md' : 'border-slate-100 hover:border-purple-200 bg-white'}`}
                    >
                      <span className="text-2xl">{rel.icon}</span>
                      <span className="font-semibold text-slate-800 text-sm">{rel.name}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button 
                    disabled={!selectedRelationship} 
                    onClick={() => setStep(2)}
                    className={`px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 transition ${selectedRelationship ? 'bg-purple-700 hover:bg-purple-800 text-white shadow-lg shadow-purple-200' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                  >
                    <span>Next: Personalize</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-purple-100 space-y-8">
                <div className="text-center">
                  <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Step 2 of 3</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Add Personal Touches</h2>
                  <p className="text-slate-500 text-sm mt-1">Help our AI engine find the most meaningful match for {selectedRelationship}.</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">What's your favorite memory with them? (Optional)</label>
                  <textarea 
                    rows="3"
                    value={memory}
                    onChange={(e) => setMemory(e.target.value)}
                    placeholder="e.g. That time we got lost in Goa and laughed for hours..."
                    className="w-full p-4 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none text-sm"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">What do they like most?</label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          if (interests.includes(item)) {
                            setInterests(interests.filter(i => i !== item));
                          } else {
                            setInterests([...interests, item]);
                          }
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${interests.includes(item) ? 'bg-purple-700 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-purple-50'}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Colors</label>
                  <div className="flex items-center space-x-3">
                    {colorOptions.map((col) => (
                      <button
                        key={col.name}
                        onClick={() => setSelectedColor(col.name)}
                        style={{ backgroundColor: col.hex }}
                        className={`w-9 h-9 rounded-full border-2 transition ${selectedColor === col.name ? 'border-purple-700 ring-4 ring-purple-100 scale-110' : 'border-slate-300'}`}
                        title={col.name}
                      ></button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-700">Maximum Budget</label>
                    <span className="text-purple-700 font-bold">₹{budget.toLocaleString('en-IN')}</span>
                  </div>
                  <input 
                    type="range" 
                    min="200" 
                    max="10000" 
                    step="200"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full accent-purple-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>₹200</span>
                    <span>₹5,000</span>
                    <span>₹10,000</span>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-50 transition">Back</button>
                  <button onClick={() => setStep(3)} className="px-8 py-3 rounded-xl font-semibold bg-purple-700 hover:bg-purple-800 text-white shadow-lg shadow-purple-200 transition">
                    Generate Recommendations
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-purple-100 shadow-sm">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Top Recommendations for {selectedRelationship}</h2>
                    <p className="text-slate-500 text-xs mt-1">Matched with your memory and budget up to ₹{budget.toLocaleString('en-IN')}</p>
                  </div>
                  <button onClick={() => setStep(1)} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-xs font-semibold hover:bg-purple-100 transition">
                    Start Over
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Custom Engraved Memory Lamp", price: 1899, rating: 4.8, img: "✨", bestPlatform: "Amazon" },
                    { title: "Personalized Leather Journal & Pen", price: 1299, rating: 4.9, img: "📔", bestPlatform: "Flipkart" },
                    { title: "Gourmet Dark Chocolate Hamper", price: 999, rating: 4.7, img: "🍫", bestPlatform: "Meesho" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                      <div>
                        <div className="w-full h-40 bg-purple-50 rounded-2xl flex items-center justify-center text-5xl mb-4">
                          {item.img}
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                        <div className="flex items-center space-x-1 text-amber-500 my-2 text-xs">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-semibold text-slate-700">{item.rating}</span>
                        </div>
                        <div className="text-2xl font-black text-purple-700 my-2">₹{item.price}</div>
                        
                        {/* Price Comparison Table */}
                        <div className="mt-4 border border-slate-100 rounded-xl p-3 bg-slate-50 text-xs space-y-2">
                          <div className="font-semibold text-slate-600 mb-1">Live Price Comparison:</div>
                          <div className="flex justify-between items-center text-slate-700">
                            <span>Amazon</span>
                            <span className="font-bold">₹{item.price}</span>
                          </div>
                          <div className="flex justify-between items-center text-slate-700">
                            <span>Flipkart</span>
                            <span className="font-bold">₹{item.price + 150}</span>
                          </div>
                          <div className="flex justify-between items-center text-slate-700">
                            <span>Ajio / Myntra</span>
                            <span className="font-bold">₹{item.price + 300}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-2">
                        <button 
                          onClick={() => setWishlist([...wishlist, item])}
                          className="flex-1 py-2.5 bg-purple-50 text-purple-700 rounded-xl font-semibold text-xs hover:bg-purple-100 transition flex items-center justify-center space-x-1"
                        >
                          <Bookmark className="w-4 h-4" />
                          <span>Save</span>
                        </button>
                        <button onClick={() => alert(`Redirecting to ${item.bestPlatform} checkout...`)} className="flex-1 py-2.5 bg-purple-700 text-white rounded-xl font-semibold text-xs hover:bg-purple-800 transition shadow-md">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'studio' && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-purple-100 text-center space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Interactive 3D Keepsake Studio</h2>
            <p className="text-slate-500 text-sm">Preview custom photo boxes and engraved gifts in 3D before ordering.</p>
            
            <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-3xl flex flex-col items-center justify-center relative shadow-inner perspective-1000">
              <div className="w-32 h-32 bg-purple-700 rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl transform rotate-12 hover:rotate-45 transition duration-500 cursor-grab">
                🎁
              </div>
              <span className="text-xs text-purple-700 font-semibold mt-4 bg-white/80 px-3 py-1 rounded-full shadow">Drag or swipe to rotate in 3D</span>
            </div>

            <div className="text-left space-y-4 pt-4 border-t border-slate-100">
              <label className="block text-sm font-semibold text-slate-700">Personal Birthday Message for Card</label>
              <textarea rows="3" placeholder="Type your heartfelt message here..." className="w-full p-4 rounded-xl border border-slate-200 text-sm outline-none focus:border-purple-600"></textarea>
              <button onClick={() => alert('Card & 3D wrap saved successfully!')} className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 transition">
                Save 3D Design & Message
              </button>
            </div>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-purple-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">My Saved Wish List</h2>
            <p className="text-slate-500 text-sm mb-6">Your shortlisted gift ideas ready for purchase.</p>

            {wishlist.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <Bookmark className="w-12 h-12 mx-auto mb-2 opacity-40" />
                <p>Your wish list is empty. Explore gift recommendations to save items!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 rounded-2xl border border-slate-100 bg-slate-50">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{item.img}</span>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <span className="text-purple-700 font-bold">₹{item.price}</span>
                      </div>
                    </div>
                    <button onClick={() => setWishlist(wishlist.filter((_, i) => i !== idx))} className="text-red-500 hover:text-red-700 p-2">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'reminders' && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-purple-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Occasion Reminders</h2>
            <p className="text-slate-500 text-sm mb-6">Never miss a birthday or anniversary again.</p>

            <div className="space-y-4">
              {reminders.map((rem) => (
                <div key={rem.id} className="flex justify-between items-center p-4 rounded-2xl border border-purple-100 bg-purple-50/50">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-purple-700" />
                    <div>
                      <h4 className="font-bold text-slate-900">{rem.name}</h4>
                      <span className="text-xs text-slate-500">{rem.date}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-700 text-white rounded-full text-xs font-bold">
                    In {rem.daysLeft} days
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}