/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom trivia game colors - vibrant gradient palette
        'trivia': {
          'purple': '#7A00FF',
          'blue': '#00F0FF', 
          'cyan': '#00FFE1',
          'teal': '#00FFC6',
          'emerald': '#00FF85',
          'orange': '#FF6B00',
          'red': '#FF3366',
          'pink': '#FF5CA8',
          'dark-purple': '#18092E',
          'dark-blue': '#0B2236',
          'light-blue': '#7CF8FF',
          'light-purple': '#C7A6FF',
          'green': '#7DFFB2',
          'yellow': '#FFD166',
        },
        // Category-specific color palettes (novel scheme)
        'aptos': {
          'primary': '#7A00FF',
          'secondary': '#00F0FF',
          'accent': '#B366FF',
          'light': '#D3BFFF',
          'dark': '#1B0B2E',
          'bg': '#0B1020',
          'surface': '#12172A',
        },
        'defi': {
          'primary': '#C7F000',
          'secondary': '#3C00FF',
          'accent': '#80FF00',
          'light': '#E8FF7A',
          'dark': '#1A2500',
          'bg': '#0A1A12',
          'surface': '#0F2418',
        },
        'nft': {
          'primary': '#FF006E',
          'secondary': '#B2FF00',
          'accent': '#FF5CA8',
          'light': '#FFC1DE',
          'dark': '#3A001E',
          'bg': '#1A0A1A',
          'surface': '#26102C',
        },
        'zk': {
          'primary': '#FF6B00',
          'secondary': '#FFD166',
          'accent': '#FF8C42',
          'light': '#FFE1B2',
          'dark': '#2D1200',
          'bg': '#1C0F06',
          'surface': '#26150A',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops) #7A00FF, #00F0FF)',
        'gradient-secondary': 'linear-gradient(135deg, var(--tw-gradient-stops) #FF6B00, #FF5CA8)',
        'gradient-success': 'linear-gradient(135deg, var(--tw-gradient-stops) #00FF85, #00FFC6)',
        'gradient-error': 'linear-gradient(135deg, var(--tw-gradient-stops) #FF3366, #FF6B00)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0b1020 0%, #12172a 60%, #1a0f2e 100%)',
        // Category-specific gradients (novel background meshes)
        'aptos-gradient': 'linear-gradient(135deg, #7A00FF 0%, #00F0FF 100%)',
        'aptos-bg-gradient': 'radial-gradient(1200px 800px at 10% 10%, rgba(122,0,255,.25), transparent 60%), radial-gradient(1200px 800px at 90% 90%, rgba(0,240,255,.25), transparent 60%), linear-gradient(135deg, #0B1020 0%, #12172A 60%, #1A0F2E 100%)',
        'defi-gradient': 'linear-gradient(135deg, #C7F000 0%, #3C00FF 100%)',
        'defi-bg-gradient': 'radial-gradient(1200px 800px at 20% 80%, rgba(199,240,0,.2), transparent 60%), radial-gradient(1000px 700px at 85% 15%, rgba(60,0,255,.25), transparent 60%), linear-gradient(135deg, #0A1A12 0%, #0F2418 60%, #162B20 100%)',
        'nft-gradient': 'linear-gradient(135deg, #FF006E 0%, #B2FF00 100%)',
        'nft-bg-gradient': 'radial-gradient(1000px 700px at 85% 85%, rgba(255,0,110,.25), transparent 60%), radial-gradient(1200px 800px at 15% 15%, rgba(178,255,0,.25), transparent 60%), linear-gradient(135deg, #1A0A1A 0%, #26102C 60%, #2F0D2F 100%)',
        'zk-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FFD166 100%)',
        'zk-bg-gradient': 'radial-gradient(1000px 700px at 10% 90%, rgba(255,107,0,.25), transparent 60%), radial-gradient(1200px 800px at 90% 10%, rgba(255,209,102,.25), transparent 60%), linear-gradient(135deg, #1C0F06 0%, #26150A 60%, #2D1A0D 100%)',
        // Experimental overlays
        'cosmic-veil': 'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.08) 0deg, rgba(255,255,255,0) 120deg)'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 10px rgba(139, 92, 246, 0.15)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" 
          },
        },
        "countdown": {
          "0%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.1)", opacity: 0.8 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "pop-in": {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "countdown": "countdown 1s ease-in-out infinite",
        "pop-in": "pop-in 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
