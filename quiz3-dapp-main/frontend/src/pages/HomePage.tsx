import { useNavigate } from 'react-router-dom';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { TrophyIcon } from '../components/icons/TrophyIcon';
import { ZapIcon } from '../components/icons/ZapIcon';
import { CoinsIcon } from '../components/icons/CoinsIcon';
import { BookOpenIcon } from '../components/icons/BookOpenIcon';
import { ClockIcon } from '../components/icons/ClockIcon';
import { TargetIcon } from '../components/icons/TargetIcon';
import { Palette, Shield, TrendingUp } from 'lucide-react';
import { CategoryCard } from '@/components/CategoryCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Category } from '@/types';
import { getCategoryEmoji } from '@/lib/utils';
import { getEducationalArticle } from '@/data/articles';

const categories = [
  {
    category: 'aptos' as Category,
    title: 'Aptos',
    description: 'Learn about the high-performance blockchain built for billions',
    icon: ZapIcon,
    questionsCount: 10,
  },
  {
    category: 'defi' as Category,
    title: 'DeFi',
    description: 'Master decentralized finance protocols and strategies',
    icon: CoinsIcon,
    questionsCount: 10,
  },
  {
    category: 'nft' as Category,
    title: 'NFT',
    description: 'Explore digital ownership and non-fungible tokens',
    icon: Palette,
    questionsCount: 10,
  },
  {
    category: 'zk' as Category,
    title: 'Zero-Knowledge',
    description: 'Discover privacy-preserving cryptographic proofs',
    icon: Shield,
    questionsCount: 10,
  },
  {
    category: 'dao' as Category,
    title: 'DAO',
    description: 'Master decentralized autonomous organizations and governance',
    icon: TrophyIcon,
    questionsCount: 10,
  },
  {
    category: 'gamefi' as Category,
    title: 'GameFi',
    description: 'Explore the intersection of gaming and decentralized finance',
    icon: TrendingUp,
    questionsCount: 10,
  },
  {
    category: 'layer2' as Category,
    title: 'Layer 2',
    description: 'Learn about blockchain scaling solutions and rollups',
    icon: ZapIcon,
    questionsCount: 10,
  },
  {
    category: 'metaverse' as Category,
    title: 'Metaverse',
    description: 'Discover virtual worlds and digital asset ownership',
    icon: Palette,
    questionsCount: 10,
  },
  {
    category: 'security' as Category,
    title: 'Security',
    description: 'Master blockchain security and smart contract auditing',
    icon: Shield,
    questionsCount: 10,
  },
  {
    category: 'trading' as Category,
    title: 'Trading',
    description: 'Learn cryptocurrency trading strategies and market analysis',
    icon: TrendingUp,
    questionsCount: 10,
  },
];

export function HomePage() {
  const navigate = useNavigate();
  const { connected } = useWallet();

  const handleCategorySelect = (category: Category) => {
    if (!connected) {
      // TODO: Show connect wallet modal
      return;
    }
    navigate(`/quiz/${category}`);
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  const handleViewClaim = () => {
    navigate('/claim');
  };

  const handleViewArticle = (category: Category) => {
    const article = getEducationalArticle(category);
    navigate('/article', { 
      state: { 
        article, 
        category 
      } 
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Animated ribbons */}
        <div className="ribbon" style={{top: '20%'}}></div>
        <div className="ribbon" style={{top: '60%'}}></div>
        <div className="ribbon" style={{top: '80%'}}></div>
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/logo.svg" 
            alt="Blockchain Mastery Hub" 
            className="h-20 sm:h-24 w-auto"
          />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-caption text-slate-200 tracking-wide">
            Blockchain Mastery Hub
          </h2>
          
          <p className="text-lg sm:text-xl display-sub text-slate-300 max-w-3xl mx-auto leading-relaxed font-body">
            Elevate your blockchain expertise through immersive knowledge challenges. 
            Test your skills across <span className="text-trivia-blue font-semibold">4 cutting-edge domains</span>, 
            dominate the rankings, and claim exclusive APT rewards.
          </p>
        </div>

        {!connected && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-amber-300 text-sm">
              🔗 <strong>Connect your wallet</strong> to start playing and earning rewards!
            </p>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <Card className="text-center">
          <CardContent className="p-6">
            <TrendingUp className="h-8 w-8 text-trivia-blue mx-auto mb-3" />
            <div className="text-3xl font-display text-white mb-2">1,247</div>
            <div className="text-sm font-caption text-slate-400">Active Players</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <TrophyIcon className="h-8 w-8 text-trivia-cyan mx-auto mb-3" />
            <div className="text-3xl font-display text-white mb-2">8,932</div>
            <div className="text-sm font-caption text-slate-400">Games Played</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <CoinsIcon className="h-8 w-8 text-trivia-orange mx-auto mb-3" />
            <div className="text-3xl font-display text-white mb-2">5,000</div>
            <div className="text-sm font-caption text-slate-400">APT Rewards Pool</div>
          </CardContent>
        </Card>
      </div>

      {/* Category Selection */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-display gradient-text mb-3">
            Choose Your Category
          </h2>
          
          <p className="text-base text-slate-400 max-w-2xl mx-auto font-body">
            Each category contains <span className="text-trivia-blue font-semibold">10 carefully crafted questions</span>. 
            Answer quickly and accurately to maximize your score and climb the leaderboard!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.category}
              category={cat.category}
              title={cat.title}
              description={cat.description}
              questionsCount={cat.questionsCount}
              isCompleted={false} // TODO: Track completion status
              isLocked={!connected}
              onClick={() => handleCategorySelect(cat.category)}
            />
          ))}
        </div>
      </div>

      {/* Weekly Challenge */}
      <Card className="panel-glass relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl gradient-text mb-2">
            🏆 Weekly Challenge
          </CardTitle>
          <CardDescription className="text-slate-300">
            Complete all categories to earn bonus rewards and climb the leaderboard!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-slate-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">20</div>
              <div className="text-slate-400">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2,000</div>
              <div className="text-slate-400">Max Points</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleViewLeaderboard} variant="outline">
              View Leaderboard
            </Button>
            <Button onClick={handleViewClaim} variant="secondary">
              Claim Rewards
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Educational Articles */}
      <div className="space-y-6 relative z-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-display gradient-text mb-3">
            📚 Educational Resources
          </h2>
          
          <p className="text-base text-slate-400 max-w-2xl mx-auto font-body">
            Deep dive into comprehensive guides covering all quiz topics. 
            <span className="text-trivia-blue font-semibold">Perfect for learning</span> before taking quizzes or 
            <span className="text-trivia-cyan font-semibold"> expanding your knowledge</span> after completion!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const article = getEducationalArticle(cat.category);
            return (
              <Card 
                key={cat.category}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer panel-glass"
                onClick={() => handleViewArticle(cat.category)}
              >
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    {/* Category Icon */}
                    <div className="flex items-center justify-center">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-trivia-blue/20 to-trivia-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 squircle">
                        <span className="text-3xl">{getCategoryEmoji(cat.category)}</span>
                      </div>
                    </div>
                    
                    {/* Article Info */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-white group-hover:text-trivia-blue transition-colors">
                        {article.title}
                      </h3>
                      
                      <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-3 w-3" />
                          <span>{article.readingTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TargetIcon className="h-3 w-3" />
                          <span className="capitalize">{article.difficulty}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Read Button */}
                    <Button 
                      size="sm" 
                      className="w-full btn-magnetic"
                      style={{'--btn-bg': 'linear-gradient(135deg, #3B82F6, #8B5CF6)'} as React.CSSProperties}
                    >
                      <BookOpenIcon className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Articles Info */}
        <Card className="bg-blue-500/10 border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <BookOpenIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Comprehensive Learning Resources</h3>
                <p className="text-sm text-slate-300 mb-3">
                  Each article provides comprehensive coverage of the topic, including key concepts, practical examples, and real-world applications. 
                  Perfect for both beginners and advanced learners!
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg">Comprehensive Coverage</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg">Beginner to Advanced</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg">Practical Examples</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg">Free Access</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* YouTube Learning Videos */}
      <div className="space-y-6 relative z-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-display gradient-text mb-3">
            🎥 Video Learning Hub
          </h2>
          
          <p className="text-base text-slate-400 max-w-2xl mx-auto font-body">
            Watch expert-curated blockchain videos to 
            <span className="text-trivia-purple font-semibold">accelerate your learning</span> and 
            <span className="text-trivia-orange font-semibold">master complex concepts</span> through visual explanations!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video 1 - Blockchain Basics */}
          <Card className="group hover:scale-105 transition-all duration-300 panel-glass overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-trivia-blue/20 to-trivia-purple/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-400">15:42</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                YouTube
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-white mb-2 group-hover:text-trivia-blue transition-colors">
                Blockchain Explained Simply
              </h3>
              <p className="text-sm text-slate-400 mb-3">
                Perfect introduction to blockchain technology, covering fundamentals every beginner needs to know.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>3Blue1Brown</span>
                <span>2.1M views</span>
              </div>
              <Button 
                size="sm" 
                className="w-full mt-3 btn-magnetic"
                onClick={() => window.open('https://www.youtube.com/watch?v=bBC-nXj3Ng4', '_blank')}
                style={{'--btn-bg': 'linear-gradient(135deg, #FF0000, #CC0000)'} as React.CSSProperties}
              >
                Watch on YouTube
              </Button>
            </CardContent>
          </Card>

          {/* Video 2 - DeFi Explained */}
          <Card className="group hover:scale-105 transition-all duration-300 panel-glass overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-trivia-cyan/20 to-trivia-blue/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-400">22:15</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                YouTube
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-white mb-2 group-hover:text-trivia-cyan transition-colors">
                DeFi Explained: The Future of Finance
              </h3>
              <p className="text-sm text-slate-400 mb-3">
                Comprehensive guide to decentralized finance, covering AMMs, yield farming, and lending protocols.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Coin Bureau</span>
                <span>1.8M views</span>
              </div>
              <Button 
                size="sm" 
                className="w-full mt-3 btn-magnetic"
                onClick={() => window.open('https://www.youtube.com/watch?v=k9HYC0EJU6E', '_blank')}
                style={{'--btn-bg': 'linear-gradient(135deg, #FF0000, #CC0000)'} as React.CSSProperties}
              >
                Watch on YouTube
              </Button>
            </CardContent>
          </Card>

          {/* Video 3 - NFTs and Web3 */}
          <Card className="group hover:scale-105 transition-all duration-300 panel-glass overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-trivia-purple/20 to-trivia-orange/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-400">18:33</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                YouTube
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-white mb-2 group-hover:text-trivia-purple transition-colors">
                NFTs and the Metaverse Revolution
              </h3>
              <p className="text-sm text-slate-400 mb-3">
                Deep dive into NFTs, digital ownership, and how they're shaping the future of virtual worlds.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Whiteboard Crypto</span>
                <span>950K views</span>
              </div>
              <Button 
                size="sm" 
                className="w-full mt-3 btn-magnetic"
                onClick={() => window.open('https://www.youtube.com/watch?v=Oz9zw7-_vhM', '_blank')}
                style={{'--btn-bg': 'linear-gradient(135deg, #FF0000, #CC0000)'} as React.CSSProperties}
              >
                Watch on YouTube
              </Button>
            </CardContent>
          </Card>

          {/* Video 4 - Smart Contracts */}
          <Card className="group hover:scale-105 transition-all duration-300 panel-glass overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-trivia-orange/20 to-trivia-blue/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-400">12:28</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                YouTube
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-white mb-2 group-hover:text-trivia-orange transition-colors">
                Smart Contracts: Code is Law
              </h3>
              <p className="text-sm text-slate-400 mb-3">
                Learn how smart contracts work, their applications, and why they're revolutionizing agreements.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Simply Explained</span>
                <span>1.2M views</span>
              </div>
              <Button 
                size="sm" 
                className="w-full mt-3 btn-magnetic"
                onClick={() => window.open('https://www.youtube.com/watch?v=ZE2HxTmxfrI', '_blank')}
                style={{'--btn-bg': 'linear-gradient(135deg, #FF0000, #CC0000)'} as React.CSSProperties}
              >
                Watch on YouTube
              </Button>
            </CardContent>
          </Card>

          {/* Video 5 - Crypto Trading */}
          <Card className="group hover:scale-105 transition-all duration-300 panel-glass overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-trivia-cyan/20 to-trivia-purple/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-400">25:47</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                YouTube
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-white mb-2 group-hover:text-trivia-cyan transition-colors">
                Cryptocurrency Trading for Beginners
              </h3>
              <p className="text-sm text-slate-400 mb-3">
                Complete guide to crypto trading strategies, technical analysis, and risk management.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>InvestAnswers</span>
                <span>780K views</span>
              </div>
              <Button 
                size="sm" 
                className="w-full mt-3 btn-magnetic"
                onClick={() => window.open('https://www.youtube.com/watch?v=1YyAzVmP9xQ', '_blank')}
                style={{'--btn-bg': 'linear-gradient(135deg, #FF0000, #CC0000)'} as React.CSSProperties}
              >
                Watch on YouTube
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Video Learning Info */}
        <Card className="bg-purple-500/10 border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-purple-300 mb-2">Expert-Curated Video Content</h3>
                <p className="text-sm text-slate-300 mb-3">
                  These carefully selected videos from top blockchain educators provide visual learning experiences 
                  that complement our quiz content. Perfect for visual learners and those who prefer video explanations!
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg">Expert Educators</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg">Visual Learning</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg">Comprehensive Topics</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg">Free Access</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How to Play */}
      <Card className="relative z-10">
        <CardHeader>
          <CardTitle className="gradient-text">How to Play</CardTitle>
          <CardDescription>
            Master the game mechanics and maximize your rewards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white">Connect & Choose</h4>
                  <p className="text-sm text-slate-400">Connect your wallet and select a category to start</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white">Answer Quickly</h4>
                  <p className="text-sm text-slate-400">You have 15 seconds per question. Speed affects your score!</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white">Build Streaks</h4>
                  <p className="text-sm text-slate-400">Consecutive correct answers earn bonus points</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-white">Claim Rewards</h4>
                  <p className="text-sm text-slate-400">Top performers earn APT tokens at the end of each week</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
