const testimonialsData = {
  badge: "WHAT PEOPLE SAY",
  title: "Real people.",
  highlight: "Real experiences.",
  description:
    "Everyday experiences from people using WakaDotCom to get things done.",
  clientsCount: "Trusted by thousands of users",
  testimonials: [
    {
      id: 1,
      quote:
        "Ordered materials on WakaStores for a repair and had them delivered the same day through WakaRider. Didn't plan for that to happen — it just did.",
      name: "Ifeoma N., Abuja",
      role: "",
      company: "",
    },
    {
      id: 2,
      quote:
        "My AC packed up on a Sunday afternoon and I honestly thought I'd be stuck till Monday. Had a verified fixer at my door in under an hour. Didn't expect that from an app.",
      name: "Amaka O., Lagos",
      role: "",
      company: "",
    },
  ],
};

// Kept asynchronous so the section can later be connected to an API without
// changing its loading flow.
export async function fetchTestimonials() {
  return testimonialsData.testimonials;
}

export default testimonialsData;
