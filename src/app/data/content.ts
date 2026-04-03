export const content = {
  en: {
    cover: {
      names: "Faveur & Patrick",
      date: "Friday, April 10 & Saturday April 10",
      subtitle: "Wedding Program",
      quote: "Love is patient, love is kind.",
      image: "/assets/images/img2.jpg",
    },
    welcome: {
      text: "Dear guests,\n\nWe are deeply honored to share this unique moment of our lives with you.",
      image: "/assets/images/welcome.jpg"
    },
    program: {
      title: "Wedding Program",
      events: [
        {
          time: "Friday April 10 – 6:00 PM",
          title: "Dot à Nanga Eboko",
          place: "Nanga Eboko",
        },
        {
          time: "Samedi April 18 - 9:00 AM",
          title: "Mariage Civil",
          place: "Mairie d'Ekounou",
        },
        {
          time: "Samedi 18 Avril - 1:00 PM",
          title: "Mariage Réligieux",
          place: "Kwadé (Nkoabang)",
        },
        {
          time: "Samedi 18 Avril – 6:00 PM",
          title: "Soirée",
          place: "3e Chapelle Mimboman (lieu dit J-sop solaire)",
        },
      ],
    },
    gallery: {
      title: "Our Memories",
      subtitle: "Moments that tell our story",
      photos: [
        {
          id: 1,
          src: "/assets/images/img1.jpg",
          alt: "Péparatif du Mariage ",

        },
        { id: 2, src: "/assets/images/img2.jpg",
          alt: "Péparatif du Mariage ",

        },
        {
          id: 3,
          src: "/assets/images/img3.jpg",
          alt: "Mariage traditionnelle",
        },
        {
          id: 4,
          src: "/assets/images/img4.jpg",
          alt: "Péparatif du Mariage ",

        },
        { id: 5, src: "/assets/images/img5.jpg",
          alt: "Péparatif du Mariage ",

        },
        { id: 6, src: "/assets/images/img6.jpg",
          alt: "Péparatif du Mariage ",

        },
        // { id: 6, src: "/assets/images/img6.jpg", alt: "En famille" },
        
      ],
    },
    gifts: {
      title: "Gifts & Blessings",
      text: "Your presence is the most precious gift.\n\nFor those who wish to support us in starting our new life together 😊:",
      methods: [
        // {
        //   id: "paypal" as const,
        //   label: "PayPal",
        //   details:
        //     "Email: \ntramelievanessa@gmail.com",
        // },
        {
          id: "orange" as const,
          label: "Orange Money",
          details: "Phone : \n694 95 30 87\nNom : \nSidje Sidje Patrick Lionel",
        },
        {
          id: "mtn" as const,
          label: "MTN Mobile Money",
          details: "Phone : \n678 65 22 44\nNom : \nEba'a Nko MARIE DIANE",
        },
        // {
        //   id: "wero" as const,
        //   label: "Wero",
        //   details: "Phone : \n07 82 48 80 69",
        // },
      ],
      note: "Thank you for your generosity and love!",
    },
    thanks: {
      title: "Thank You",
      text: "Thank you for your love, support and prayers.\n\nWith all our affection,\nFaveur & Patrick",
      subtitle: "Confirmation of Attendance Required",
      subdesc:
        "Please confirm your attendance by clicking below and filling out the form",
      buttonLabel: "Access the form",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc_KRPQ4TWKaxhDXtGR-1tlQtXRVn7AES7uGmfAMr3hCqtndw/viewform?usp=dialog",
      limit: "Deadline: April 18"
    },
  },

  fr: {
    cover: {
      names: "Faveur & Patrick",
      subtitle: "Programme de Mariage",
      quote: "L'amour est patient, l'amour est bienveillant.",
      image: "/assets/images/img2.jpg",
    },
    welcome: {
      text: "Chers invités,\n\nNotre histoire passe au chapitre “Pour toujours”. Votre présence rendra ce passage inoubliable.\n\n« Deux aventuriers ont décidé de faire équipe pour la vie »",
      image: "/assets/images/welcome.jpg"
    },
    program: {
      title: "Programme de Mariage",
      events: [
        {
          time: "Vendredi 10 Avril – 18h00",
          title: "Dot à Nanga Eboko",
          place: "Nanga Eboko",
        },
        {
          time: "Samedi 18 Avril - 09h00",
          title: "Mariage Civil",
          place: "Mairie d'Ekounou",
        },
        {
          time: "Samedi 18 Avril - 13h00",
          title: "Mariage Réligieux",
          place: "Kwadé (Nkoabang)",
        },
        {
          time: "Samedi 18 Avril – 18h00",
          title: "Soirée",
          place: "3e Chapelle Mimboman (lieu dit J-sop solaire)",
        },
      ],
    },
    gallery: {
      title: "Nos Souvenirs",
      subtitle: "Des moments qui racontent notre histoire",
       photos: [
        {
          id: 1,
          src: "/assets/images/img1.jpg",
          alt: "Péparatif du Mariage ",

        },
        { id: 2, src: "/assets/images/img2.jpg", 
          alt: "Péparatif du Mariage " },
        
        {
          id: 3,
          src: "/assets/images/img3.jpg",
          alt: "Péparatif du Mariage ",
        },
        {
          id: 4,
          src: "/assets/images/img4.jpg",
          alt: "Péparatif du Mariage ",

        },
        { id: 5, src: "/assets/images/img5.jpg", 
          alt: "Péparatif du Mariage " },
        { id: 6, src: "/assets/images/img6.jpg",
          alt: "Péparatif du Mariage ",

        }, 
        
        
        // { id: 6, src: "/assets/images/img6.jpg", alt: "En famille" },
        
      ],
    },
    gifts: {
      title: "Cadeaux & Bénédictions",
      text: "Votre présence est le plus précieux des cadeaux.\n\nPour ceux qui souhaitent nous soutenir dans notre nouvelle vie 😊 :",
      methods: [
        // {
        //   id: "paypal" as const,
        //   label: "PayPal",
        //   details:
        //     "Email : \ntramelievanessa@gmail.com",
        // },
        {
          id: "orange" as const,
          label: "Orange Money",
          details: "Téléphone : \n694 95 30 87\nNom : \nSidje Sidje Patrick Lionel",
        },
        {
          id: "mtn" as const,
          label: "MTN Mobile Money",
          details: "Téléphone : \n678 65 22 44\nNom : \nEba'a Nko MARIE DIANE",
        },
        // {
        //   id: "wero" as const,
        //   label: "Wero",
        //   details: "Téléphone : \n07 82 48 80 69",
        // },
      ],
      note: "Merci pour votre générosité et votre amour !",
    },
    thanks: {
      title: "Remerciements",
      text: "Merci pour votre amour, votre soutien et vos prières.\n\nAvec toute notre affection,\nFaveur & Patrick",
      subtitle: "Confirmation de présence obligatoire",
      subdesc:
        "Veuillez nous confirmer votre présence en cliquant ci-dessous et en remplissant le formulaire",
      buttonLabel: "Accéder au formulaire",
      link: "https://forms.gle/gjKreKZNgssFr5kKA",
      limit: "Date limite : 17 Avril"
    },
  },
} as const;

export type Language = keyof typeof content;
export type CoverData = typeof content.en.cover;
export type WelcomeData = typeof content.en.welcome;
export type ProgramData = typeof content.en.program;
export type GalleryData = typeof content.en.gallery;
export type GiftsData = typeof content.en.gifts;
export type ThanksData = typeof content.en.thanks;
