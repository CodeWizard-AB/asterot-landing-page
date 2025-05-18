import BkashLogo from "@/assets/BKash-Logo.svg";
import NagadLogo from "@/assets/Nagad-Logo.svg";
import RocketLogo from "@/assets/Rocket-Logo.svg";

export const menuItems = [
	{ name: "About", href: "#about" },
	{ name: "Tournament", href: "#tournament" },
	{ name: "Registration", href: "#registration" },
	{ name: "Team", href: "#team" },
	{ name: "Testimonials", href: "#testimonials" },
	{ name: "Contact", href: "#contact" },
];

export const testimonials = [
	{
		id: 1,
		name: "Raisha Farhana Rafa",
		designation: "Works at AIUB Drama Club",
		company: "TechCorp",
		testimonial:
			"I would highly recommend this for event management.!!It's rare to see a company that combines professionalism, creativity, and vision so seamlessly. Asterot is doing exactly that! Their journey has been inspiring!",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 2,
		name: "Raishatun Sohana",
		designation: "Student of ULAB",
		company: "BrandBoost",
		testimonial:
			"Asterot is truly a gem in the event management industry!  Their team is warm, responsive, and incredibly organized",
		avatar: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		id: 3,
		name: "Anam Al Ahad",
		designation: "MTO at Alpine Infotech",
		company: "DesignPro",
		testimonial:
			"Asterot is redefining excellence in the event management industry! Their team's dedication, professionalism, and creativity ensure a seamless and unforgettable experience. If you want an event that stands out, Asterot is the perfect choice! Excited to see what they bring next!",
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
	},
	{
		id: 4,
		name: "Sk Mahmudul Hassan",
		designation: "Psychologist at Living With Wellness",
		company: "Living With Wellness",
		testimonial:
			"If you're looking for an event management company that truly cares about quality, look no further than Asterot. Their commitment to perfection is evident in everything they do!",
		avatar: "https://randomuser.me/api/portraits/women/6.jpg",
	},
	{
		id: 5,
		name: "Naim Iqbal",
		designation: "Distributor at Bashundhara Cement",
		company: "CodeCrafters",
		testimonial:
			"Asterot Bangladesh Limited is a game-changer! Their innovative approach and vision for the future are truly inspiring. Can't wait to see what's next",
		avatar: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		id: 6,
		name: "Soaib Ahmed",
		designation: "Works at Rabindra University Photographers Society - RUPS",
		company: "Rabindra University Photographers Society - RUPS",
		testimonial:
			"Working with ASTEROT was an absolute game-changer! Their attention to detail and creative approach turned our vision into something truly extraordinary.",
		avatar: "https://randomuser.me/api/portraits/women/2.jpg",
	},
];

export const teamMembers = [
	{
		name: "Jaky All Naiem Jihan",
		title: "Chairman",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/jihan.jpg?updatedAt=1747484583346",
		bio: "Visionary leader and Founder. Guides Asterot's strategic direction.",
	},
	{
		name: "MD Sahadat Hosen",
		title: "Managing Director",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/sakib.jpg?updatedAt=1747484583411",
		bio: "Heads operations and partnerships. Leads Asterot with precision.",
	},
	{
		name: "Abu Jakaria Apu",
		title: "Director",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/opu.jpg?updatedAt=1747484583248",
		bio: "Oversees finance and logistics. Keeps Asterot running smoothly.",
	},
	{
		name: "MD Faysal Mahmud",
		title: "Director",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/faysal.jpg?updatedAt=1747484583394",
		bio: "Planning expert and organizer. Shapes Asterot's event blueprint.",
	},
	{
		name: "Abu Sayed Bin Noman",
		title: "Director",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/pritom.jpg?updatedAt=1747484583850",
		bio: "Team builder and people-first leader. Fuels Asterot's HR strength.",
	},
	{
		name: "Al-Ebne Noman",
		title: "Director",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/noman.jpg?updatedAt=1747484583859",
		bio: "Admin and relationship strategist. Strengthens Asterot's network.",
	},
	{
		name: "Anunay Argha",
		title: "Chief Technology Officer",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/anunay.jpg?updatedAt=1747484583416",
		bio: "Front-end specialist. Powers Asterot's tech and digital presence.",
	},
];

export const contactItems = [
	{
		icon: "MailIcon",
		title: "Email",
		description: "Our friendly team is here to help.",
		link: {
			href: "mailto:asterotbd@gmail.com",
			text: "asterotbd@gmail.com",
		},
	},
	{
		icon: "MessageCircle",
		title: "WhatsApp",
		description: "Chat with us on WhatsApp.",
		link: {
			href: "https://wa.me/8801325274642",
			text: "Start new chat",
			target: "_blank",
		},
	},
	{
		icon: "MapPinIcon",
		title: "Office",
		description: "Come say hello at our office HQ.",
		link: {
			href: "https://www.google.com/maps/place/5b,+5+Razia+Sultana+Rd,+Dhaka/data=!4m2!3m1!1s0x3755bf58f89140f5:0x7501b3da29f1d549?sa=X&ved=1t:242&ictx=111",
			text: "5B/5 Razia Sultana Road Mohammadpur, Dhaka 1207",
			target: "_blank",
		},
	},
	{
		icon: "PhoneIcon",
		title: "Phone",
		description: "Mon-Fri from 8am to 5pm.",
		link: {
			href: "tel:+8801325274642",
			text: "+880 1325-274642",
		},
	},
];

export const paymentMethods = [
	{
		name: "bKash",
		logo: BkashLogo,
		number: "017 1784 8532",
		type: "Personal",
	},
	{
		name: "Nagad",
		logo: NagadLogo,
		number: "017 1784 8532",
		type: "Personal",
	},
	{
		name: "Rocket",
		logo: RocketLogo,
		number: "017 1784 85329",
		type: "Personal",
	},
];
