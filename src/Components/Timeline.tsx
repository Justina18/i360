
import React from "react";
import TimelineData from "../data/TimelineData";

const Timeline = () => {
    const timelineData = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-gray-200 text-xs md:text-sm font-normal mb-8">
                        Launched our platform and reached 10,000+ active users in the first quarter.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop"
                            alt="Team collaboration"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop"
                            alt="Office workspace"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop"
                            alt="Team meeting"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=500&fit=crop"
                            alt="Product development"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-gray-200 text-xs md:text-sm font-normal mb-8">
                        Secured Series A funding and expanded our team to 50+ talented individuals.
                    </p>
                    <p className="text-gray-200 text-xs md:text-sm font-normal mb-8">
                        Opened offices in three new cities and established partnerships with industry leaders.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&h=500&fit=crop"
                            alt="Office building"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop"
                            alt="Modern office"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=500&fit=crop"
                            alt="Workspace"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop"
                            alt="Team collaboration"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-gray-200 text-xs md:text-sm font-normal mb-4">
                        Major product updates and feature releases
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
                            ✅ AI-powered candidate matching
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
                            ✅ Mobile app launch
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
                            ✅ Analytics dashboard
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
                            ✅ Integration marketplace
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
                            ✅ Enterprise security features
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop"
                            alt="Analytics"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
                            alt="Dashboard"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop"
                            alt="Development"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=500&fit=crop"
                            alt="Team working"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen w-full">
            <TimelineData data={timelineData} />
        </div>
    );
};

export default Timeline;