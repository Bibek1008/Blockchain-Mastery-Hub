import { Category, Question, EducationalContent } from '@/types';

// Dummy question data - to be replaced with real content later
export const DUMMY_QUESTIONS: Record<Category, Question[]> = {
  aptos: [
    {
      id: 'aptos_1',
      category: 'aptos',
      text: 'What consensus mechanism does Aptos blockchain use?',
      choices: ['Proof of Work', 'Proof of Stake', 'AptosBFT', 'Delegated Proof of Stake'],
      answer_idx: 2,
      difficulty: 'medium',
      explanation: 'Aptos uses AptosBFT, a Byzantine Fault Tolerant consensus protocol that enables high throughput and low latency.'
    },
    {
      id: 'aptos_2', 
      category: 'aptos',
      text: 'Which programming language is primarily used for smart contracts on Aptos?',
      choices: ['Solidity', 'Rust', 'Move', 'JavaScript'],
      answer_idx: 2,
      difficulty: 'easy',
      explanation: 'Move is a resource-oriented programming language designed for safe and flexible smart contract development on Aptos.'
    },
    {
      id: 'aptos_3',
      category: 'aptos',
      text: 'What is the native token of the Aptos blockchain?',
      choices: ['APTOS', 'APT', 'APS', 'APTO'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'APT is the native utility token used for transaction fees, staking, and governance on the Aptos network.'
    },
    {
      id: 'aptos_4',
      category: 'aptos',
      text: 'What is the maximum theoretical TPS (Transactions Per Second) that Aptos can achieve?',
      choices: ['1,000', '10,000', '100,000', '160,000+'],
      answer_idx: 3,
      difficulty: 'hard',
      explanation: 'Aptos can theoretically process over 160,000 TPS due to its parallel execution engine and optimistic concurrency control.'
    },
    {
      id: 'aptos_5',
      category: 'aptos',
      text: 'What is the name of Aptos parallel execution engine?',
      choices: ['Block-STM', 'ParallelVM', 'ConcurrentEVM', 'AptosTX'],
      answer_idx: 0,
      difficulty: 'medium',
      explanation: 'Block-STM (Block-based Software Transactional Memory) enables parallel transaction execution by detecting conflicts and ensuring correctness.'
    },
    {
      id: 'aptos_6',
      category: 'aptos',
      text: 'What year was Aptos blockchain officially launched?',
      choices: ['2020', '2021', '2022', '2023'],
      answer_idx: 2,
      difficulty: 'easy',
      explanation: 'Aptos was officially launched in October 2022, marking a significant milestone in blockchain technology with its focus on scalability and safety.'
    },
    {
      id: 'aptos_7',
      category: 'aptos',
      text: 'What is the main advantage of Aptos over traditional blockchains?',
      choices: ['Lower fees', 'Higher throughput', 'Better privacy', 'More decentralization'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Aptos is designed for high throughput, capable of processing over 160,000 transactions per second through its parallel execution engine.'
    },
    {
      id: 'aptos_8',
      category: 'aptos',
      text: 'What does BFT stand for in AptosBFT?',
      choices: ['Blockchain Fault Tolerance', 'Byzantine Fault Tolerance', 'Best Fault Tolerance', 'Block Fault Tolerance'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'BFT stands for Byzantine Fault Tolerance, a consensus mechanism that can handle up to one-third of malicious nodes while maintaining network security.'
    },
    {
      id: 'aptos_9',
      category: 'aptos',
      text: 'What is the name of Aptos testnet?',
      choices: ['Devnet', 'Testnet', 'AIT-3', 'All of the above'],
      answer_idx: 3,
      difficulty: 'hard',
      explanation: 'Aptos has used multiple testnet names including Devnet, Testnet, and AIT-3 (Aptos Incentivized Testnet 3) for different phases of development.'
    },
    {
      id: 'aptos_10',
      category: 'aptos',
      text: 'What is the minimum stake required to become an Aptos validator?',
      choices: ['1 APT', '1,000 APT', '1,000,000 APT', 'No minimum stake'],
      answer_idx: 2,
      difficulty: 'hard',
      explanation: 'Aptos requires a minimum stake of 1,000,000 APT to become a validator, ensuring network security and validator commitment.'
    }
  ],
  defi: [
    {
      id: 'defi_1',
      category: 'defi',
      text: 'What does AMM stand for in DeFi?',
      choices: ['Automated Market Maker', 'Advanced Money Management', 'Asset Management Module', 'Algorithmic Market Model'],
      answer_idx: 0,
      difficulty: 'medium',
      explanation: 'Automated Market Makers use mathematical formulas to price assets and enable decentralized trading without order books.'
    },
    {
      id: 'defi_2',
      category: 'defi',
      text: 'What is impermanent loss in DeFi liquidity provision?',
      choices: ['Permanent token loss', 'Temporary price volatility loss', 'Smart contract bug loss', 'Network congestion loss'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Impermanent loss occurs when the price ratio of deposited tokens changes, resulting in less value than holding tokens separately.'
    },
    {
      id: 'defi_3',
      category: 'defi',
      text: 'What is the primary function of a decentralized exchange (DEX)?',
      choices: ['Centralized trading', 'Peer-to-peer token swapping', 'Token creation', 'Identity verification'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'DEXs facilitate direct peer-to-peer cryptocurrency trading without intermediaries or custody of user funds.'
    },
    {
      id: 'defi_4',
      category: 'defi',
      text: 'What does TVL stand for in DeFi protocols?',
      choices: ['Total Value Locked', 'Token Verification Level', 'Transaction Volume Limit', 'Time Value Liquidation'],
      answer_idx: 0,
      difficulty: 'easy',
      explanation: 'Total Value Locked measures the total amount of cryptocurrency deposited in DeFi protocols and represents their adoption and trust.'
    },
    {
      id: 'defi_5',
      category: 'defi',
      text: 'What is yield farming in DeFi?',
      choices: ['Mining cryptocurrencies', 'Earning rewards by providing liquidity', 'Creating new tokens', 'Validating transactions'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Yield farming involves providing liquidity to DeFi protocols in exchange for token rewards, fees, or other incentives.'
    },
    {
      id: 'defi_6',
      category: 'defi',
      text: 'What is the purpose of a decentralized autonomous organization (DAO) in DeFi?',
      choices: ['Automated trading', 'Community governance', 'Price discovery', 'Liquidity provision'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'DAOs enable decentralized governance where token holders vote on protocol changes, treasury management, and other important decisions.'
    },
    {
      id: 'defi_7',
      category: 'defi',
      text: 'What is a flash loan in DeFi?',
      choices: ['A long-term loan', 'A loan that must be repaid in the same transaction', 'A loan with no interest', 'A loan backed by real estate'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Flash loans are uncollateralized loans that must be borrowed and repaid within a single transaction, enabling complex arbitrage strategies.'
    },
    {
      id: 'defi_8',
      category: 'defi',
      text: 'What does APY stand for in DeFi?',
      choices: ['Annual Percentage Yield', 'Automated Protocol Yield', 'Average Protocol Yield', 'Annual Protocol Yield'],
      answer_idx: 0,
      difficulty: 'easy',
      explanation: 'APY (Annual Percentage Yield) represents the real rate of return earned on an investment, taking into account compound interest.'
    },
    {
      id: 'defi_9',
      category: 'defi',
      text: 'What is the main risk of providing liquidity to a DeFi protocol?',
      choices: ['Smart contract bugs', 'Impermanent loss', 'Regulatory changes', 'All of the above'],
      answer_idx: 3,
      difficulty: 'medium',
      explanation: 'DeFi liquidity providers face multiple risks including smart contract vulnerabilities, impermanent loss, and regulatory uncertainty.'
    },
    {
      id: 'defi_10',
      category: 'defi',
      text: 'What is the purpose of a governance token in DeFi?',
      choices: ['To pay transaction fees', 'To vote on protocol changes', 'To provide liquidity', 'To mine new tokens'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'Governance tokens give holders the right to vote on protocol upgrades, parameter changes, and treasury management decisions.'
    }
  ],
  nft: [
    {
      id: 'nft_1',
      category: 'nft',
      text: 'What does NFT stand for?',
      choices: ['New Financial Token', 'Non-Fungible Token', 'Network File Transfer', 'Next Generation Token'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'Non-Fungible Tokens are unique digital assets that represent ownership of specific items or content on the blockchain.'
    },
    {
      id: 'nft_2',
      category: 'nft',
      text: 'Which metadata standard is commonly used for NFTs on Ethereum?',
      choices: ['ERC-20', 'ERC-721', 'ERC-1155', 'Both ERC-721 and ERC-1155'],
      answer_idx: 3,
      difficulty: 'medium',
      explanation: 'Both ERC-721 (single NFTs) and ERC-1155 (multi-token standard) are widely used for creating NFTs with different capabilities.'
    },
    {
      id: 'nft_3',
      category: 'nft',
      text: 'What is the main advantage of storing NFT metadata on IPFS?',
      choices: ['Lower costs', 'Decentralized storage', 'Faster access', 'Better security'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'IPFS provides decentralized, immutable storage for NFT metadata, ensuring it remains accessible even if original servers fail.'
    },
    {
      id: 'nft_4',
      category: 'nft',
      text: 'What is a common use case for utility NFTs?',
      choices: ['Digital art collection', 'Access to exclusive content', 'Investment speculation', 'Profile pictures'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'Utility NFTs provide holders with access to exclusive content, services, or experiences beyond just ownership of digital assets.'
    },
    {
      id: 'nft_5',
      category: 'nft',
      text: 'What is NFT royalties?',
      choices: ['Initial sale price', 'Transaction fees', 'Creator earnings from resales', 'Platform commission'],
      answer_idx: 2,
      difficulty: 'easy',
      explanation: 'NFT royalties are automatic payments to original creators each time their NFT is resold on secondary markets.'
    },
    {
      id: 'nft_6',
      category: 'nft',
      text: 'What is the difference between ERC-721 and ERC-1155 NFT standards?',
      choices: ['No difference', 'ERC-721 is for single NFTs, ERC-1155 is for multiple', 'ERC-1155 is for single NFTs, ERC-721 is for multiple', 'Different blockchains'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'ERC-721 is designed for unique, single NFTs while ERC-1155 supports multiple token types in a single contract, including both fungible and non-fungible tokens.'
    },
    {
      id: 'nft_7',
      category: 'nft',
      text: 'What is the purpose of NFT metadata?',
      choices: ['To store transaction history', 'To describe the NFT properties and content', 'To track ownership', 'To calculate royalties'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'NFT metadata contains information about the NFT such as name, description, image URL, and other attributes that define what the NFT represents.'
    },
    {
      id: 'nft_8',
      category: 'nft',
      text: 'What is a common use case for gaming NFTs?',
      choices: ['Profile pictures', 'In-game items and characters', 'Digital art', 'Real estate'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Gaming NFTs often represent in-game items, characters, weapons, or land that players can own, trade, and use across different games or platforms.'
    },
    {
      id: 'nft_9',
      category: 'nft',
      text: 'What is the main advantage of storing NFT images on IPFS?',
      choices: ['Lower costs', 'Decentralized and permanent storage', 'Faster loading', 'Better quality'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'IPFS provides decentralized, content-addressed storage that ensures NFT images remain accessible even if the original server goes offline.'
    },
    {
      id: 'nft_10',
      category: 'nft',
      text: 'What is the purpose of NFT marketplaces?',
      choices: ['To create NFTs', 'To buy, sell, and trade NFTs', 'To store NFTs', 'To validate NFTs'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'NFT marketplaces are platforms where users can discover, buy, sell, and trade NFTs, providing liquidity and price discovery for the NFT ecosystem.'
    }
  ],
  zk: [
    {
      id: 'zk_1',
      category: 'zk',
      text: 'What does ZK stand for in zero-knowledge proofs?',
      choices: ['Zero Knowledge', 'Zone Keeper', 'Zero Krypto', 'Zonal Key'],
      answer_idx: 0,
      difficulty: 'easy',
      explanation: 'Zero-Knowledge proofs allow one party to prove knowledge of information without revealing the information itself.'
    },
    {
      id: 'zk_2',
      category: 'zk',
      text: 'What is the main benefit of zk-SNARKs?',
      choices: ['Faster transactions', 'Lower fees', 'Privacy and succinctness', 'Better security'],
      answer_idx: 2,
      difficulty: 'medium',
      explanation: 'zk-SNARKs provide both privacy (hiding transaction details) and succinctness (very small proof sizes) for blockchain applications.'
    },
    {
      id: 'zk_3',
      category: 'zk',
      text: 'What does the "succinct" property mean in zk-SNARKs?',
      choices: ['Fast verification', 'Small proof size', 'High security', 'Easy setup'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Succinct means the proof size is small and verification is fast, regardless of the complexity of the original computation.'
    },
    {
      id: 'zk_4',
      category: 'zk',
      text: 'What is a trusted setup in zero-knowledge systems?',
      choices: ['User verification', 'Initial parameter generation', 'Network validation', 'Smart contract deployment'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Trusted setup generates initial cryptographic parameters that must be created securely and the setup data must be destroyed.'
    },
    {
      id: 'zk_5',
      category: 'zk',
      text: 'What is the main use case for zk-rollups?',
      choices: ['Privacy coins', 'Blockchain scaling', 'Smart contracts', 'Token creation'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'zk-rollups bundle many transactions into one, reducing blockchain congestion while maintaining security through zero-knowledge proofs.'
    },
    {
      id: 'zk_6',
      category: 'zk',
      text: 'What does STARK stand for in zero-knowledge proofs?',
      choices: ['Scalable Transparent ARgument of Knowledge', 'Secure Transparent ARgument of Knowledge', 'Scalable Trusted ARgument of Knowledge', 'Secure Trusted ARgument of Knowledge'],
      answer_idx: 0,
      difficulty: 'hard',
      explanation: 'STARK stands for Scalable Transparent ARgument of Knowledge, a type of zero-knowledge proof that doesn\'t require a trusted setup.'
    },
    {
      id: 'zk_7',
      category: 'zk',
      text: 'What is the main advantage of zk-SNARKs over zk-STARKs?',
      choices: ['Smaller proof sizes', 'No trusted setup required', 'Faster verification', 'Better privacy'],
      answer_idx: 0,
      difficulty: 'hard',
      explanation: 'zk-SNARKs typically produce smaller proof sizes compared to zk-STARKs, making them more efficient for certain applications.'
    },
    {
      id: 'zk_8',
      category: 'zk',
      text: 'What is a common application of zero-knowledge proofs in blockchain?',
      choices: ['Mining', 'Privacy-preserving transactions', 'Smart contract deployment', 'Token creation'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Zero-knowledge proofs are commonly used to create privacy-preserving transactions where transaction details are hidden while maintaining verifiability.'
    },
    {
      id: 'zk_9',
      category: 'zk',
      text: 'What is the purpose of a trusted setup ceremony in zk-SNARKs?',
      choices: ['To generate public parameters', 'To verify proofs', 'To create private keys', 'To mine blocks'],
      answer_idx: 0,
      difficulty: 'hard',
      explanation: 'Trusted setup ceremonies generate the initial public parameters needed for zk-SNARKs, and the setup data must be destroyed to maintain security.'
    },
    {
      id: 'zk_10',
      category: 'zk',
      text: 'What is the main benefit of using zero-knowledge proofs for identity verification?',
      choices: ['Faster processing', 'Privacy preservation', 'Lower costs', 'Better security'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Zero-knowledge proofs allow users to prove they have certain credentials or attributes without revealing the actual credential details, preserving privacy.'
    }
  ],
  dao: [
    {
      id: 'dao_1',
      category: 'dao',
      text: 'What does DAO stand for?',
      choices: ['Digital Asset Organization', 'Decentralized Autonomous Organization', 'Distributed Application Organization', 'Data Access Organization'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'DAO stands for Decentralized Autonomous Organization, a blockchain-based organization governed by smart contracts and token holders.'
    },
    {
      id: 'dao_2',
      category: 'dao',
      text: 'What is the primary mechanism for decision-making in most DAOs?',
      choices: ['CEO decisions', 'Token-based voting', 'Random selection', 'AI algorithms'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'Most DAOs use token-based voting where governance token holders vote on proposals and protocol changes.'
    },
    {
      id: 'dao_3',
      category: 'dao',
      text: 'What is a governance token in the context of DAOs?',
      choices: ['A token for paying fees', 'A token that grants voting rights', 'A token for staking rewards', 'A token for trading'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Governance tokens give holders the right to vote on DAO proposals, protocol changes, and treasury management decisions.'
    },
    {
      id: 'dao_4',
      category: 'dao',
      text: 'What is a common challenge faced by DAOs?',
      choices: ['Too much centralization', 'Voter apathy and low participation', 'High transaction fees', 'Lack of transparency'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Many DAOs struggle with low voter participation, as token holders may not actively engage in governance decisions.'
    },
    {
      id: 'dao_5',
      category: 'dao',
      text: 'What is a treasury in DAO context?',
      choices: ['A government building', 'A collection of funds controlled by the DAO', 'A type of smart contract', 'A voting mechanism'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'A DAO treasury is a collection of funds (tokens, NFTs, etc.) that the DAO controls and can allocate through governance votes.'
    },
    {
      id: 'dao_6',
      category: 'dao',
      text: 'What is quadratic voting in DAOs?',
      choices: ['Voting four times', 'Voting cost increases quadratically with vote count', 'Voting in four rounds', 'Voting with four tokens'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Quadratic voting is a system where the cost of additional votes increases quadratically, preventing wealthy holders from dominating decisions.'
    },
    {
      id: 'dao_7',
      category: 'dao',
      text: 'What is delegation in DAO governance?',
      choices: ['Giving up voting rights', 'Assigning voting power to another address', 'Creating new proposals', 'Burning tokens'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Delegation allows token holders to assign their voting power to trusted representatives who vote on their behalf.'
    },
    {
      id: 'dao_8',
      category: 'dao',
      text: 'What is a proposal in DAO governance?',
      choices: ['A marriage proposal', 'A suggested change or action for the DAO', 'A new token creation', 'A smart contract bug'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'A proposal is a formal suggestion for changes, actions, or decisions that DAO members can vote on.'
    },
    {
      id: 'dao_9',
      category: 'dao',
      text: 'What is the purpose of a multisig wallet in DAO operations?',
      choices: ['To store multiple tokens', 'To require multiple signatures for transactions', 'To create multiple accounts', 'To vote multiple times'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Multisig wallets require multiple signatures to execute transactions, adding security and preventing single points of failure in DAO operations.'
    },
    {
      id: 'dao_10',
      category: 'dao',
      text: 'What is a common legal challenge for DAOs?',
      choices: ['High gas fees', 'Regulatory uncertainty', 'Technical bugs', 'Low participation'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'DAOs face regulatory uncertainty as legal frameworks struggle to classify and regulate these new organizational structures.'
    }
  ],
  gamefi: [
    {
      id: 'gamefi_1',
      category: 'gamefi',
      text: 'What does GameFi combine?',
      choices: ['Gaming and Finance', 'Graphics and Finance', 'Games and Files', 'Gambling and Finance'],
      answer_idx: 0,
      difficulty: 'easy',
      explanation: 'GameFi combines gaming and decentralized finance (DeFi), allowing players to earn cryptocurrency and NFTs through gameplay.'
    },
    {
      id: 'gamefi_2',
      category: 'gamefi',
      text: 'What does P2E stand for in GameFi?',
      choices: ['Pay to Earn', 'Play to Earn', 'Proof to Earn', 'Power to Earn'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'P2E stands for Play to Earn, a model where players can earn cryptocurrency or NFTs by playing games.'
    },
    {
      id: 'gamefi_3',
      category: 'gamefi',
      text: 'What are in-game NFTs commonly used for?',
      choices: ['Paying transaction fees', 'Representing game assets and items', 'Storing game saves', 'Creating new games'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'In-game NFTs represent unique game assets like characters, weapons, land, or items that players can own, trade, and use across games.'
    },
    {
      id: 'gamefi_4',
      category: 'gamefi',
      text: 'What is a guild in GameFi?',
      choices: ['A type of smart contract', 'A group of players who pool resources', 'A gaming platform', 'A type of NFT'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'GameFi guilds are organizations where players pool resources, share NFTs, and collaborate to maximize earnings in play-to-earn games.'
    },
    {
      id: 'gamefi_5',
      category: 'gamefi',
      text: 'What is the main benefit of blockchain integration in gaming?',
      choices: ['Better graphics', 'True ownership of in-game assets', 'Faster gameplay', 'Lower development costs'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Blockchain integration allows players to truly own their in-game assets as NFTs, which can be traded, sold, or used across different games.'
    },
    {
      id: 'gamefi_6',
      category: 'gamefi',
      text: 'What is yield farming in the context of GameFi?',
      choices: ['Growing virtual crops', 'Earning rewards by staking game tokens', 'Creating new games', 'Trading NFTs'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'In GameFi, yield farming involves staking game tokens or NFTs to earn additional rewards, combining DeFi mechanics with gaming.'
    },
    {
      id: 'gamefi_7',
      category: 'gamefi',
      text: 'What is a common challenge in GameFi economics?',
      choices: ['High graphics requirements', 'Token inflation and sustainability', 'Slow internet connections', 'Complex controls'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Many GameFi projects struggle with token inflation as new tokens are constantly minted as rewards, potentially devaluing the currency.'
    },
    {
      id: 'gamefi_8',
      category: 'gamefi',
      text: 'What is the purpose of governance tokens in GameFi projects?',
      choices: ['To buy in-game items', 'To vote on game development decisions', 'To pay transaction fees', 'To create new characters'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Governance tokens allow players and stakeholders to vote on game development decisions, economic parameters, and future features.'
    },
    {
      id: 'gamefi_9',
      category: 'gamefi',
      text: 'What is land ownership in GameFi metaverses?',
      choices: ['Renting physical property', 'Owning virtual real estate as NFTs', 'Buying game licenses', 'Purchasing game servers'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Virtual land in GameFi metaverses is represented as NFTs, allowing players to own, develop, and monetize virtual real estate.'
    },
    {
      id: 'gamefi_10',
      category: 'gamefi',
      text: 'What is scholarship in GameFi?',
      choices: ['Educational programs', 'Lending game assets to other players', 'Academic research', 'Game development courses'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'GameFi scholarship involves lending expensive game NFTs to other players who share the earnings, making games accessible to more players.'
    }
  ],
  layer2: [
    {
      id: 'layer2_1',
      category: 'layer2',
      text: 'What is the primary purpose of Layer 2 solutions?',
      choices: ['To replace Layer 1', 'To scale blockchain networks', 'To create new cryptocurrencies', 'To improve graphics'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'Layer 2 solutions are built on top of existing blockchains to improve scalability, reduce fees, and increase transaction throughput.'
    },
    {
      id: 'layer2_2',
      category: 'layer2',
      text: 'What is a rollup in Layer 2 scaling?',
      choices: ['A type of smart contract', 'A method to bundle transactions off-chain', 'A consensus mechanism', 'A wallet type'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Rollups bundle multiple transactions off-chain and submit a single proof to the main blockchain, reducing costs and increasing throughput.'
    },
    {
      id: 'layer2_3',
      category: 'layer2',
      text: 'What is the difference between optimistic and zk-rollups?',
      choices: ['No difference', 'Optimistic assumes validity, zk proves validity', 'Optimistic is faster', 'zk is more expensive'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Optimistic rollups assume transactions are valid unless challenged, while zk-rollups use cryptographic proofs to guarantee validity.'
    },
    {
      id: 'layer2_4',
      category: 'layer2',
      text: 'What is a state channel?',
      choices: ['A TV channel about blockchain', 'An off-chain scaling solution for frequent interactions', 'A type of smart contract', 'A consensus algorithm'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'State channels allow parties to conduct multiple transactions off-chain and only settle the final state on the main blockchain.'
    },
    {
      id: 'layer2_5',
      category: 'layer2',
      text: 'What is the Lightning Network?',
      choices: ['A Bitcoin Layer 2 payment solution', 'An Ethereum scaling solution', 'A new blockchain', 'A mining algorithm'],
      answer_idx: 0,
      difficulty: 'medium',
      explanation: 'The Lightning Network is a Layer 2 payment protocol built on Bitcoin that enables fast, low-cost transactions through payment channels.'
    },
    {
      id: 'layer2_6',
      category: 'layer2',
      text: 'What is a sidechain?',
      choices: ['A backup blockchain', 'A separate blockchain connected to the main chain', 'A type of smart contract', 'A wallet feature'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Sidechains are separate blockchains that run parallel to the main chain and are connected through two-way pegs for asset transfers.'
    },
    {
      id: 'layer2_7',
      category: 'layer2',
      text: 'What is the main trade-off of Layer 2 solutions?',
      choices: ['Higher fees', 'Reduced security assumptions', 'Slower transactions', 'Limited functionality'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Layer 2 solutions often involve trade-offs in security assumptions compared to the base layer, though they maintain strong security guarantees.'
    },
    {
      id: 'layer2_8',
      category: 'layer2',
      text: 'What is fraud proof in optimistic rollups?',
      choices: ['Proof of fraudulent activity', 'Evidence that a transaction is invalid', 'A security mechanism', 'All of the above'],
      answer_idx: 3,
      difficulty: 'hard',
      explanation: 'Fraud proofs in optimistic rollups are cryptographic evidence submitted to challenge invalid transactions during the dispute period.'
    },
    {
      id: 'layer2_9',
      category: 'layer2',
      text: 'What is the purpose of a bridge in Layer 2 ecosystems?',
      choices: ['To connect different blockchains', 'To transfer assets between layers', 'To validate transactions', 'To mine new blocks'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Bridges enable users to transfer assets and data between the main blockchain (Layer 1) and Layer 2 solutions.'
    },
    {
      id: 'layer2_10',
      category: 'layer2',
      text: 'What is data availability in the context of Layer 2?',
      choices: ['Internet connectivity', 'Access to transaction data for verification', 'Database storage', 'API availability'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Data availability ensures that transaction data is accessible for verification and fraud detection, crucial for Layer 2 security.'
    }
  ],
  metaverse: [
    {
      id: 'metaverse_1',
      category: 'metaverse',
      text: 'What is the metaverse?',
      choices: ['A new blockchain', 'A virtual shared digital space', 'A cryptocurrency', 'A gaming console'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'The metaverse is a collective virtual shared space created by the convergence of virtually enhanced physical reality and physically persistent virtual space.'
    },
    {
      id: 'metaverse_2',
      category: 'metaverse',
      text: 'What role do NFTs play in the metaverse?',
      choices: ['Payment method', 'Digital asset ownership', 'User authentication', 'Data storage'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'NFTs enable true ownership of digital assets in the metaverse, including virtual land, avatars, items, and experiences.'
    },
    {
      id: 'metaverse_3',
      category: 'metaverse',
      text: 'What is an avatar in the metaverse context?',
      choices: ['A movie character', 'A digital representation of a user', 'A type of NFT', 'A virtual currency'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'An avatar is a digital representation or embodiment of a user in virtual worlds and metaverse environments.'
    },
    {
      id: 'metaverse_4',
      category: 'metaverse',
      text: 'What is virtual real estate in the metaverse?',
      choices: ['Physical property listings', 'Digital land parcels that can be owned', 'Real estate websites', 'Property management software'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Virtual real estate consists of digital land parcels in metaverse platforms that users can buy, sell, develop, and monetize.'
    },
    {
      id: 'metaverse_5',
      category: 'metaverse',
      text: 'What is interoperability in the metaverse?',
      choices: ['Cross-platform compatibility', 'Ability to use assets across different virtual worlds', 'Internet connectivity', 'Multi-language support'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Interoperability allows users to move their digital assets, avatars, and identities seamlessly between different metaverse platforms.'
    },
    {
      id: 'metaverse_6',
      category: 'metaverse',
      text: 'What is a virtual economy?',
      choices: ['Online banking', 'Economic system within virtual worlds', 'Cryptocurrency trading', 'Digital marketing'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'A virtual economy is an economic system that operates within virtual worlds, involving the creation, trade, and consumption of virtual goods and services.'
    },
    {
      id: 'metaverse_7',
      category: 'metaverse',
      text: 'What is the purpose of virtual events in the metaverse?',
      choices: ['Entertainment only', 'Social interaction and experiences', 'Data collection', 'Advertising'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'Virtual events in the metaverse provide immersive social experiences, from concerts and conferences to social gatherings and educational sessions.'
    },
    {
      id: 'metaverse_8',
      category: 'metaverse',
      text: 'What is digital identity in the metaverse?',
      choices: ['Username and password', 'Comprehensive virtual persona and reputation', 'Email address', 'Social media profile'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Digital identity in the metaverse encompasses a user\'s virtual persona, reputation, assets, and social connections across virtual worlds.'
    },
    {
      id: 'metaverse_9',
      category: 'metaverse',
      text: 'What is augmented reality (AR) in relation to the metaverse?',
      choices: ['Virtual reality only', 'Overlay of digital content on physical world', 'Gaming graphics', 'Internet speed'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'AR overlays digital content onto the physical world, bridging the gap between physical and virtual spaces in the metaverse experience.'
    },
    {
      id: 'metaverse_10',
      category: 'metaverse',
      text: 'What is a common challenge for metaverse adoption?',
      choices: ['Low internet usage', 'Technical barriers and hardware requirements', 'Lack of interest', 'Government restrictions'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Metaverse adoption faces challenges including high-end hardware requirements, technical complexity, and the need for widespread VR/AR adoption.'
    }
  ],
  security: [
    {
      id: 'security_1',
      category: 'security',
      text: 'What is a smart contract audit?',
      choices: ['Financial review', 'Code security assessment', 'Performance testing', 'User interface review'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'A smart contract audit is a comprehensive security assessment of smart contract code to identify vulnerabilities and ensure safe operation.'
    },
    {
      id: 'security_2',
      category: 'security',
      text: 'What is a reentrancy attack?',
      choices: ['Repeated login attempts', 'Exploiting recursive function calls', 'Network congestion', 'Password cracking'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'A reentrancy attack exploits smart contracts by making recursive calls before the first function execution is complete, potentially draining funds.'
    },
    {
      id: 'security_3',
      category: 'security',
      text: 'What is a private key in blockchain security?',
      choices: ['Public password', 'Secret cryptographic key for signing transactions', 'Wallet address', 'Smart contract code'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'A private key is a secret cryptographic key that allows users to sign transactions and prove ownership of blockchain assets.'
    },
    {
      id: 'security_4',
      category: 'security',
      text: 'What is a 51% attack?',
      choices: ['Attacking 51 nodes', 'Controlling majority of network hash power', 'Stealing 51% of funds', 'Blocking 51% of transactions'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'A 51% attack occurs when a single entity controls more than 50% of a blockchain\'s mining power, potentially allowing them to manipulate the network.'
    },
    {
      id: 'security_5',
      category: 'security',
      text: 'What is a honeypot in smart contract security?',
      choices: ['Sweet reward system', 'Malicious contract that traps funds', 'Security testing tool', 'Bee-themed DeFi protocol'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'A honeypot is a malicious smart contract designed to appear vulnerable but actually traps attackers\' funds when they attempt to exploit it.'
    },
    {
      id: 'security_6',
      category: 'security',
      text: 'What is multi-signature (multisig) security?',
      choices: ['Multiple passwords', 'Requiring multiple signatures to authorize transactions', 'Signing multiple times', 'Multiple wallets'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Multisig security requires multiple private keys to sign and authorize transactions, reducing single points of failure and improving security.'
    },
    {
      id: 'security_7',
      category: 'security',
      text: 'What is a flash loan attack?',
      choices: ['Very fast loan approval', 'Exploiting DeFi protocols using uncollateralized loans', 'Lightning-fast transactions', 'Quick loan repayment'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'Flash loan attacks exploit DeFi protocols by borrowing large amounts without collateral, manipulating prices, and profiting within a single transaction.'
    },
    {
      id: 'security_8',
      category: 'security',
      text: 'What is cold storage in cryptocurrency security?',
      choices: ['Refrigerated storage', 'Offline storage of private keys', 'Cloud storage', 'Frozen accounts'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'Cold storage refers to keeping cryptocurrency private keys offline, away from internet-connected devices, to prevent online attacks.'
    },
    {
      id: 'security_9',
      category: 'security',
      text: 'What is a sandwich attack in DeFi?',
      choices: ['Eating while trading', 'Front-running and back-running a transaction', 'Layered security approach', 'Multiple transaction types'],
      answer_idx: 1,
      difficulty: 'hard',
      explanation: 'A sandwich attack involves placing transactions before and after a victim\'s transaction to manipulate prices and extract value through MEV.'
    },
    {
      id: 'security_10',
      category: 'security',
      text: 'What is the purpose of a bug bounty program in blockchain security?',
      choices: ['Catching insects', 'Incentivizing security researchers to find vulnerabilities', 'Rewarding users', 'Testing new features'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Bug bounty programs offer financial rewards to security researchers who discover and responsibly disclose vulnerabilities in blockchain systems.'
    }
  ],
  trading: [
    {
      id: 'trading_1',
      category: 'trading',
      text: 'What is a limit order in cryptocurrency trading?',
      choices: ['Order with time limit', 'Order to buy/sell at specific price', 'Order with quantity limit', 'Order with risk limit'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'A limit order is an instruction to buy or sell a cryptocurrency at a specific price or better, giving traders control over execution price.'
    },
    {
      id: 'trading_2',
      category: 'trading',
      text: 'What is slippage in cryptocurrency trading?',
      choices: ['Price difference between expected and actual execution', 'Trading fee', 'Network delay', 'Wallet error'],
      answer_idx: 0,
      difficulty: 'medium',
      explanation: 'Slippage is the difference between the expected price of a trade and the actual price at which it executes, often due to market volatility or low liquidity.'
    },
    {
      id: 'trading_3',
      category: 'trading',
      text: 'What is arbitrage in cryptocurrency trading?',
      choices: ['Random trading', 'Profiting from price differences across markets', 'High-frequency trading', 'Automated trading'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Arbitrage involves buying and selling the same asset on different exchanges to profit from price differences between markets.'
    },
    {
      id: 'trading_4',
      category: 'trading',
      text: 'What is a stop-loss order?',
      choices: ['Order to stop trading', 'Order to limit losses by selling at predetermined price', 'Order to stop profits', 'Order to pause trading'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'A stop-loss order automatically sells a position when the price reaches a predetermined level to limit potential losses.'
    },
    {
      id: 'trading_5',
      category: 'trading',
      text: 'What is leverage in cryptocurrency trading?',
      choices: ['Using borrowed funds to increase position size', 'Trading multiple coins', 'Using trading bots', 'Advanced trading features'],
      answer_idx: 0,
      difficulty: 'medium',
      explanation: 'Leverage allows traders to borrow funds to increase their position size, amplifying both potential profits and losses.'
    },
    {
      id: 'trading_6',
      category: 'trading',
      text: 'What is a market maker in cryptocurrency trading?',
      choices: ['Exchange owner', 'Entity providing liquidity by placing orders', 'Price setter', 'Trading bot'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Market makers provide liquidity by continuously placing buy and sell orders, earning profits from the bid-ask spread.'
    },
    {
      id: 'trading_7',
      category: 'trading',
      text: 'What is HODL in cryptocurrency culture?',
      choices: ['Hold On for Dear Life', 'High-frequency trading', 'Options trading', 'Derivatives trading'],
      answer_idx: 0,
      difficulty: 'easy',
      explanation: 'HODL means "Hold On for Dear Life" and refers to the strategy of holding cryptocurrencies long-term regardless of price volatility.'
    },
    {
      id: 'trading_8',
      category: 'trading',
      text: 'What is a whale in cryptocurrency trading?',
      choices: ['Large sea mammal', 'Individual or entity holding large amounts of cryptocurrency', 'Trading algorithm', 'Exchange platform'],
      answer_idx: 1,
      difficulty: 'easy',
      explanation: 'A whale is an individual or entity that holds large amounts of cryptocurrency, capable of significantly influencing market prices.'
    },
    {
      id: 'trading_9',
      category: 'trading',
      text: 'What is technical analysis in trading?',
      choices: ['Analyzing technology stocks', 'Using price charts and indicators to predict movements', 'Studying blockchain technology', 'Analyzing trading platforms'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Technical analysis involves studying price charts, patterns, and indicators to predict future price movements and make trading decisions.'
    },
    {
      id: 'trading_10',
      category: 'trading',
      text: 'What is DCA in cryptocurrency investing?',
      choices: ['Digital Currency Analysis', 'Dollar Cost Averaging', 'Decentralized Currency Algorithm', 'Daily Crypto Assessment'],
      answer_idx: 1,
      difficulty: 'medium',
      explanation: 'Dollar Cost Averaging (DCA) is an investment strategy of buying fixed amounts of cryptocurrency at regular intervals, regardless of price.'
    }
  ]
};

// Educational content for wrong answers
export const EDUCATIONAL_CONTENT: Record<Category, Record<string, EducationalContent>> = {
  aptos: {
    consensus: {
      title: 'AptosBFT Consensus',
      explanation: 'AptosBFT is a Byzantine Fault Tolerant protocol that provides safety and liveness guarantees.',
      learnMoreUrl: 'https://aptos.dev/concepts/blockchain#consensus',
      relatedTopics: ['Byzantine Fault Tolerance', 'Consensus Mechanisms', 'Blockchain Security']
    },
    move_language: {
      title: 'Move Programming Language',
      explanation: 'Move was designed for safe resource management and formal verification in blockchain applications.',
      learnMoreUrl: 'https://aptos.dev/move/move-on-aptos',
      relatedTopics: ['Smart Contracts', 'Resource-Oriented Programming', 'Blockchain Development']
    },
    parallel_execution: {
      title: 'Block-STM Parallel Execution',
      explanation: 'Block-STM enables parallel transaction processing by detecting and resolving conflicts automatically.',
      learnMoreUrl: 'https://aptos.dev/concepts/blockchain#parallel-execution',
      relatedTopics: ['Transaction Processing', 'Blockchain Performance', 'Concurrency Control']
    }
  },
  defi: {
    amm: {
      title: 'Automated Market Makers',
      explanation: 'AMMs replace traditional order books with mathematical formulas for price discovery and trading.',
      learnMoreUrl: 'https://chain.link/education-hub/what-is-an-automated-market-maker-amm',
      relatedTopics: ['Liquidity Pools', 'Price Discovery', 'Decentralized Trading']
    },
    impermanent_loss: {
      title: 'Understanding Impermanent Loss',
      explanation: 'IL occurs when token price ratios change after depositing in liquidity pools, affecting LP returns.',
      learnMoreUrl: 'https://academy.binance.com/en/articles/impermanent-loss-explained',
      relatedTopics: ['Liquidity Provision', 'DeFi Risks', 'Yield Farming']
    },
    yield_farming: {
      title: 'Yield Farming Strategies',
      explanation: 'Earn rewards by providing liquidity, staking tokens, or participating in DeFi protocol incentives.',
      learnMoreUrl: 'https://defipulse.com/blog/what-is-yield-farming',
      relatedTopics: ['DeFi Rewards', 'Liquidity Mining', 'Token Incentives']
    }
  },
  nft: {
    standards: {
      title: 'NFT Token Standards',
      explanation: 'Different standards like ERC-721 and ERC-1155 provide various capabilities for NFT creation and management.',
      learnMoreUrl: 'https://ethereum.org/en/developers/docs/standards/tokens/',
      relatedTopics: ['Token Standards', 'Smart Contracts', 'Digital Assets']
    },
    metadata: {
      title: 'NFT Metadata and IPFS',
      explanation: 'IPFS ensures decentralized, permanent storage of NFT metadata and associated digital content.',
      learnMoreUrl: 'https://docs.ipfs.io/concepts/what-is-ipfs/',
      relatedTopics: ['Decentralized Storage', 'Content Addressing', 'NFT Infrastructure']
    },
    utility: {
      title: 'Utility NFTs and Use Cases',
      explanation: 'Beyond collectibles, NFTs can provide access, membership, gaming assets, and various digital utilities.',
      learnMoreUrl: 'https://opensea.io/blog/guides/non-fungible-tokens/',
      relatedTopics: ['Digital Ownership', 'Access Tokens', 'Gaming NFTs']
    }
  },
  zk: {
    zero_knowledge: {
      title: 'Zero-Knowledge Proof Fundamentals',
      explanation: 'Prove knowledge without revealing information - enabling privacy and verification simultaneously.',
      learnMoreUrl: 'https://ethereum.org/en/zero-knowledge-proofs/',
      relatedTopics: ['Cryptographic Proofs', 'Privacy Technology', 'Blockchain Privacy']
    },
    snarks: {
      title: 'zk-SNARKs Technology',
      explanation: 'Succinct Non-interactive Arguments of Knowledge enable efficient verification of complex computations.',
      learnMoreUrl: 'https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell',
      relatedTopics: ['Cryptographic Primitives', 'Proof Systems', 'Blockchain Scaling']
    },
    rollups: {
      title: 'zk-Rollup Scaling Solutions',
      explanation: 'Bundle transactions off-chain while maintaining security through zero-knowledge proofs on-chain.',
      learnMoreUrl: 'https://ethereum.org/en/developers/docs/scaling/zk-rollups/',
      relatedTopics: ['Layer 2 Solutions', 'Blockchain Scaling', 'Zero-Knowledge Technology']
    }
  }
};

// Helper function to get random questions for a category
export function getRandomQuestions(category: Category, count: number = 5): Question[] {
  const questions = DUMMY_QUESTIONS[category];
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
}

// Helper function to get educational content for a wrong answer
export function getEducationalContent(category: Category, questionId: string): EducationalContent | null {
  const question = DUMMY_QUESTIONS[category].find(q => q.id === questionId);
  if (!question || !question.explanation) return null;
  
  return {
    title: `About: ${question.text}`,
    explanation: question.explanation,
    relatedTopics: ['Web3 Education', 'Blockchain Technology', category.toUpperCase()]
  };
}
