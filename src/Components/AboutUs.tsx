import React from 'react';

// Types
interface TransformationStory {
    name: string;
    age: string;
    country: string;
    image: string;
    story: string;
}

interface DonationImpact {
    title: string;
    description: string;
    image: string;
}

interface CaseStudy {
    title: string;
    description: string;
    image: string;
    readTime: string;
    date: string;
}

const AboutUs: React.FC = () => {
    // Data
    const transformationStories: TransformationStory[] = [
        {
            name: 'Sofia',
            age: '12 Years',
            country: 'Kenya',
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=400&fit=crop',
            story: 'Sofia\'s life changed and determined young girl from a rural village in Kenya faced significant challenges accessing education.'
        },
        {
            name: 'Raj',
            age: '15 Years',
            country: 'India',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
            story: 'Raj is with confident boy from a troubled background, struggled to express himself through challenges faced. Through program...'
        },
        {
            name: 'Maria',
            age: '8 Years',
            country: 'Brazil',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            story: 'Maria an studious girl with a difficult past, found a loving home in homeless orphanage in Brazil both nurturing care and education support.'
        }
    ];

    const donationImpacts: DonationImpact[] = [
        {
            title: 'Program Expansion',
            description: 'Donations enable organizations to expand their programs and reach more individuals in need with increased funding, they can extend their services to more communities.',
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop'
        },
        {
            title: 'Enhanced Services',
            description: 'Donations contribute to the enhancement and quality and scope of their services. They can invest in better facilities, resources, and trained staff to ensure the best possible support.',
            image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop'
        },
        {
            title: 'Empowering Beneficiaries',
            description: 'Donations empower beneficiaries and communities by providing them with resources and tools and opportunities to improve their lives. This sustainable approach fosters long-term growth and impacts across all gifts and community.',
            image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop'
        }
    ];

    const caseStudies: CaseStudy[] = [
        {
            title: 'A Journey of Resilience',
            description: 'This case study follows the inspiring story of Sofia, a determined young girl from a rural village in Kenya, who faced significant challenges in accessing education. Through fostering resources Sponsorship program...',
            image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
            readTime: '5 min Read',
            date: 'Sep 15, 2023'
        },
        {
            title: 'Healing Through Art - The Story of Raj',
            description: 'Meet Raj, a young boy from a troubled background in India, struggled to express himself emotionally. This case study delves into how Nirmalo\'s Music Therapy program provided Raj with an outlet for his emotions and a healthier outlet for his emotions.',
            image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop',
            readTime: '8 min Read',
            date: 'August 2, 2023'
        }
    ];

    return (
        <div className="min-h-screen bg-white" >

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block mb-2">
                                <img src="/target.png" className='w-12' alt="about" />

                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Stories of
                                <span className="bg-lime-400 px-4 py-2 inline-block">Hope </span>
                                <br />and
                                <span className="bg-lime-400 px-4 py-2 inline-block">Resilience</span>

                            </h1>
                            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
                                Explore heartwarming and inspiring stories of children whose lives have been positively impacted by Nirmalo's initiatives.
                                Witness the transformative journey of young souls as they overcome adversity, discover their potential, and shape their dreams.
                                These stories of hope and resilience showcase the profound difference that compassion and support can make in the lives of children in need.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors">
                                    Get Fully Equipped
                                </button>
                                <button className="border-2 border-gray-900 hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors">
                                    Support Our Cause
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://res.cloudinary.com/de6dwxq4l/image/upload/v1770288833/317244334_126736326696033_377846_mfxxlx.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Inspiring Transformations</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Witness the transformative journey of young souls as they overcome adversity, discover their potential, and shape their dreams.
                            These stories of hope and resilience showcase the profound difference that compassion and support can make in the lives of children in need.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {transformationStories.map((story, index) => (
                            <div key={index} className="bg-lime-400 rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                                        <div>
                                            <div className="text-gray-700 text-xs mb-1">Name</div>
                                            <div className="font-semibold">{story.name}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-700 text-xs mb-1">Age</div>
                                            <div className="font-semibold">{story.age}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-700 text-xs mb-1">Country</div>
                                            <div className="font-semibold">{story.country}</div>
                                        </div>
                                    </div>
                                    <div className="border-t-2 border-gray-900 pt-4 mb-4">
                                        <h3 className="font-bold text-lg mb-2">Finding Hope Amidst Adversity</h3>
                                        <p className="text-sm text-gray-800 leading-relaxed">{story.story}</p>
                                    </div>
                                    <button className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-full font-medium transition-colors">
                                        Read Full Story
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="text-gray-900 font-medium hover:underline inline-flex items-center space-x-2">
                            <span>View More Stories</span>
                            <span className="text-xl">↓</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Donation Impact Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Amplifying Change Through Donations</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover the remarkable impact of your donations in Nirmalo's mission to empower underprivileged children. Your support
                            offers beyond aids in transforming lives, creating positive change across various initiatives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {donationImpacts.map((impact, index) => (
                            <div key={index} className="group">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                                    <img
                                        src={impact.image}
                                        alt={impact.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{impact.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="text-gray-900 font-medium hover:underline inline-flex items-center space-x-2">
                            <span>View More Impacts</span>
                            <span className="text-xl">↓</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Case Studies</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover the remarkable impact of your donations in Nirmalo's mission to empower underprivileged children. Your support
                            offers beyond aids in transforming positive change across various initiatives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center space-x-1">
                                            <span>📖</span>
                                            <span>{study.readTime}</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <span>📅</span>
                                            <span>{study.date}</span>
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{study.description}</p>
                                    <button className="text-gray-900 font-medium hover:underline">
                                        View Case Study
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="text-gray-900 font-medium hover:underline inline-flex items-center space-x-2">
                            <span>View More Case Studies</span>
                            <span className="text-xl">↓</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-lime-400"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white transform rotate-45 translate-x-48 -translate-y-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white transform rotate-45 -translate-x-48 translate-y-48"></div>
                    {/* Striped pattern */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                    }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Donate Now and Help Level Up the Lives<br />
                        of Children in Need
                    </h2>
                    <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
                        Your support will help provide education, healthcare, food, and care to children
                        in need. Together, let's create a brighter and more hopeful future.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <p className="text-gray-800 font-medium">
                            Click here to donate now and help level up the lives of children in need
                        </p>
                        <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center space-x-2">
                            <span>Donate Now</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;