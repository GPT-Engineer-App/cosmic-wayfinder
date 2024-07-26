import React from 'react';
import { Rocket, Star, Globe, Telescope } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      <header className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Explore the Cosmos</h1>
        <p className="text-xl mb-8">Embark on a journey through the wonders of space</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Start Your Adventure
        </Button>
      </header>

      <main className="container mx-auto py-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Rocket className="h-12 w-12 mb-4" />}
            title="Space Exploration"
            description="Discover the latest missions and technologies pushing the boundaries of space exploration."
          />
          <FeatureCard
            icon={<Star className="h-12 w-12 mb-4" />}
            title="Stellar Phenomena"
            description="Learn about fascinating stellar events, from supernovas to black holes."
          />
          <FeatureCard
            icon={<Globe className="h-12 w-12 mb-4" />}
            title="Exoplanets"
            description="Explore worlds beyond our solar system and the search for habitable planets."
          />
          <FeatureCard
            icon={<Telescope className="h-12 w-12 mb-4" />}
            title="Astronomy for All"
            description="Get started with stargazing and amateur astronomy tips and resources."
          />
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Explore?</h2>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Join Our Community
          </Button>
        </section>
      </main>

      <footer className="bg-blue-900 py-8 text-center">
        <p>&copy; 2024 Cosmic Explorers. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-800 p-6 rounded-lg text-center">
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Index;
