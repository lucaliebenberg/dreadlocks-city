# Dreadlocks City Internationoal

**Website for a local dreadlock hair studio.**

### Features

- Built with[ **Next.js**](https://nextjs.org/) (Server-side rendering, image optimization)
- Responsive styling with [**Tailwind CSS**](https://tailwindcss.com/)
- Google maps and Google reviews integration
- Image optimization via next/image & Cloudinary
- [EmailJS](https://www.emailjs.com/) for contact form management
- Hosted on [Vercel](https://vercel.com/)


### Try it locally

1. Clone the repo

2. In root folder create a `.env` file and add your API keys

In order for *Google map and  reviews* to work you need the following

```
NEXT_PUBLIC_placesAPIkey= "Google Places API key"
NEXT_PUBLIC_placeid= "Google Places Place ID"
NEXT_PUBLIC_googleMapsApiKey="Google Maps API Key"
```
For *Contact Us* form you need to make an account at [EmailJS](https://www.emailjs.com/) and provide these variables

```
NEXT_PUBLIC_templateid="Email JS Template ID"
NEXT_PUBLIC_userid="EmailJS User ID"

```

3. Then
`npm start`

Salon services data is in `components/Services/services-*.js`

Team member data is in `components/Team/members.js`

### Tools
- [ Next.js](https://nextjs.org/) 
- React
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) 

### License
MIT License
