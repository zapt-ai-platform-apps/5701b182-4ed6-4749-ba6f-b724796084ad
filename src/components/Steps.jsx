import React from 'react';
import Step from './Step';

export default function Steps() {
  return (
    <ol className="list-decimal list-inside space-y-6">
      <Step title="Identifying the Market Opportunity">
        <p className="text-base font-sans text-neutral-700">
          The foundation of the empire started with thorough market research. The Rich Man analyzed emerging trends in gaming, such as mobile gaming, virtual reality, and blockchain-based games. He identified a niche that was underserved — immersive story-driven games with player-driven economies.
        </p>
      </Step>
      <Step title="Developing a Unique Value Proposition">
        <p className="text-base font-sans text-neutral-700">
          Instead of creating generic games, The Rich Man focused on delivering unique experiences. His first project revolved around combining engaging narratives with innovative gameplay mechanics, such as user-generated content and cross-platform functionality.
        </p>
      </Step>
      <Step title="Securing Initial Funding">
        <p className="text-base font-sans text-neutral-700">
          To bring his vision to life, The Rich Man pitched his idea to investors, leveraging a detailed business plan. This plan highlighted market demand, projected growth, and the potential for high returns. He also utilized crowdfunding platforms to build a community of early supporters.
        </p>
      </Step>
      <Step title="Building a Talented Team">
        <p className="text-base font-sans text-neutral-700">
          Understanding that a game is only as good as its creators, The Rich Man assembled a team of top-tier talent, including game developers, artists, and marketing experts. He fostered a culture of innovation and creativity, ensuring his team was motivated and aligned with the company's vision.
        </p>
      </Step>
      <Step title="Launching the First Game">
        <p className="text-base font-sans text-neutral-700 mb-2">
          The Rich Man launched his first game after two years of development. The game was a massive success due to its:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Engaging gameplay mechanics</li>
          <li>Visually stunning graphics</li>
          <li>Frequent updates based on community feedback</li>
          <li>Effective marketing campaigns across social media platforms</li>
        </ul>
      </Step>
      <Step title="Expanding the Portfolio">
        <p className="text-base font-sans text-neutral-700">
          After the success of his first game, The Rich Man reinvested the profits into developing more titles. He diversified his portfolio by creating games in different genres, such as strategy, multiplayer online battle arena (MOBA), and role-playing games (RPGs).
        </p>
      </Step>
      <Step title="Leveraging Technology and Innovation">
        <p className="text-base font-sans text-neutral-700">
          To stay ahead of the competition, The Rich Man embraced emerging technologies. His company was among the first to adopt virtual reality, augmented reality, and blockchain-based gaming solutions. He also implemented AI-driven tools for personalized user experiences.
        </p>
      </Step>
      <Step title="Establishing Partnerships">
        <p className="text-base font-sans text-neutral-700">
          The Rich Man formed strategic partnerships with hardware manufacturers, streaming platforms, and esports organizations. These collaborations boosted his company’s visibility and created new revenue streams.
        </p>
      </Step>
      <Step title="Creating a Gaming Ecosystem">
        <p className="text-base font-sans text-neutral-700">
          Over time, The Rich Man developed an interconnected gaming ecosystem. Players could use a unified account to access all the games, transfer in-game assets across titles, and participate in a thriving virtual economy.
        </p>
      </Step>
      <Step title="Scaling Globally">
        <p className="text-base font-sans text-neutral-700">
          The Rich Man expanded his operations internationally by localizing his games and targeting emerging markets. He set up regional offices to understand local gaming cultures and preferences, ensuring his products resonated with diverse audiences.
        </p>
      </Step>
      <Step title="Reinventing the Brand">
        <p className="text-base font-sans text-neutral-700">
          To maintain relevance in a competitive industry, The Rich Man continuously reinvented his brand. He hosted annual gaming conventions, launched exclusive merchandise, and even produced animated series based on his games.
        </p>
      </Step>
      <Step title="Establishing a Legacy">
        <p className="text-base font-sans text-neutral-700">
          Decades later, The Rich Man’s empire became a household name in the gaming industry. His company was not only profitable but also revered for its innovation, community engagement, and ability to define trends.
        </p>
      </Step>
    </ol>
  );
}