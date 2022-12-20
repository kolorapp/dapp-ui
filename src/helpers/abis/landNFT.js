export const NFTAbi = [
  { type: "constructor", stateMutability: "nonpayable", inputs: [] },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "approved",
        internalType: "address",
        indexed: true,
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "operator",
        internalType: "address",
        indexed: true,
      },
      { type: "bool", name: "approved", internalType: "bool", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { type: "address", name: "from", internalType: "address", indexed: true },
      { type: "address", name: "to", internalType: "address", indexed: true },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "_totalLands",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addPoint",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      {
        type: "tuple",
        name: "point",
        internalType: "struct GeoSpatialPoint",
        components: [
          { type: "int256", name: "latitude", internalType: "int256" },
          { type: "int256", name: "longitude", internalType: "int256" },
          { type: "uint256", name: "decimals", internalType: "uint256" },
          { type: "uint256", name: "creationDate", internalType: "uint256" },
          { type: "uint256", name: "updateDate", internalType: "uint256" },
        ],
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addSpecies",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      {
        type: "tuple",
        name: "_species",
        internalType: "struct Species",
        components: [
          { type: "string", name: "speciesAlias", internalType: "string" },
          { type: "string", name: "scientificName", internalType: "string" },
          { type: "uint256", name: "density", internalType: "uint256" },
          { type: "uint256", name: "size", internalType: "uint256" },
          { type: "uint256", name: "decimals", internalType: "uint256" },
          { type: "uint256", name: "TCO2perSecond", internalType: "uint256" },
          { type: "uint256", name: "TCO2perYear", internalType: "uint256" },
          { type: "uint256", name: "landId", internalType: "uint256" },
          { type: "uint256", name: "creationDate", internalType: "uint256" },
          { type: "uint256", name: "updateDate", internalType: "uint256" },
        ],
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "approve",
    inputs: [
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "authorize",
    inputs: [{ type: "address", name: "manager", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "balanceOf",
    inputs: [{ type: "address", name: "owner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "baseURI",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getApproved",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "tuple",
        name: "",
        internalType: "struct NFTInfo",
        components: [
          { type: "string", name: "name", internalType: "string" },
          { type: "string", name: "identifier", internalType: "string" },
          { type: "address", name: "landOwner", internalType: "address" },
          { type: "string", name: "landOwnerAlias", internalType: "string" },
          { type: "uint256", name: "decimals", internalType: "uint256" },
          { type: "uint256", name: "size", internalType: "uint256" },
          { type: "string", name: "country", internalType: "string" },
          { type: "string", name: "stateOrRegion", internalType: "string" },
          { type: "string", name: "city", internalType: "string" },
          { type: "uint8", name: "state", internalType: "enum State" },
          {
            type: "uint256",
            name: "initialTCO2perYear",
            internalType: "uint256",
          },
          { type: "uint256", name: "soldTCO2", internalType: "uint256" },
          { type: "uint256", name: "creationDate", internalType: "uint256" },
          { type: "string", name: "unit", internalType: "string" },
        ],
      },
    ],
    name: "getNFTInfo",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getVCUSLeft",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "initialTCO2Of",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isApprovedForAll",
    inputs: [
      { type: "address", name: "owner", internalType: "address" },
      { type: "address", name: "operator", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isAuthorized",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isLandOwner",
    inputs: [
      { type: "address", name: "landOwner", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isPublished",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isRemoved",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "landIndexOf",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "landOfOwnerByIndex",
    inputs: [
      { type: "address", name: "landOwner", internalType: "address" },
      { type: "uint256", name: "index", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "landOwnerOf",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "marketplace",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "name",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "owner",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "ownerOf",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "int256", name: "latitude", internalType: "int256" },
      { type: "int256", name: "longitude", internalType: "int256" },
      { type: "uint256", name: "decimals", internalType: "uint256" },
      { type: "uint256", name: "creationDate", internalType: "uint256" },
      { type: "uint256", name: "updateDate", internalType: "uint256" },
    ],
    name: "points",
    inputs: [
      { type: "uint256", name: "", internalType: "uint256" },
      { type: "uint256", name: "", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "renounceOwnership",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "safeMint",
    inputs: [
      { type: "address", name: "to", internalType: "address" },
      { type: "string", name: "name", internalType: "string" },
      { type: "string", name: "identifier", internalType: "string" },
      { type: "address", name: "landOwner", internalType: "address" },
      { type: "string", name: "landOwnerAlias", internalType: "string" },
      { type: "uint256", name: "decimals", internalType: "uint256" },
      { type: "uint256", name: "size", internalType: "uint256" },
      { type: "string", name: "country", internalType: "string" },
      { type: "string", name: "stateOrRegion", internalType: "string" },
      { type: "string", name: "city", internalType: "string" },
      { type: "uint256", name: "initialTCO2", internalType: "uint256" },
      { type: "string", name: "unit", internalType: "string" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "safeTransferFrom",
    inputs: [
      { type: "address", name: "from", internalType: "address" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "safeTransferFrom",
    inputs: [
      { type: "address", name: "from", internalType: "address" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      { type: "bytes", name: "data", internalType: "bytes" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "safeTransferToMarketplace",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setApprovalForAll",
    inputs: [
      { type: "address", name: "operator", internalType: "address" },
      { type: "bool", name: "approved", internalType: "bool" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setBaseURI",
    inputs: [{ type: "string", name: "_baseURI", internalType: "string" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setMarketplace",
    inputs: [
      { type: "address", name: "_marketplace", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setPoints",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      {
        type: "tuple[]",
        name: "_points",
        internalType: "struct GeoSpatialPoint[]",
        components: [
          { type: "int256", name: "latitude", internalType: "int256" },
          { type: "int256", name: "longitude", internalType: "int256" },
          { type: "uint256", name: "decimals", internalType: "uint256" },
          { type: "uint256", name: "creationDate", internalType: "uint256" },
          { type: "uint256", name: "updateDate", internalType: "uint256" },
        ],
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setSpecies",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      {
        type: "tuple[]",
        name: "_species",
        internalType: "struct Species[]",
        components: [
          { type: "string", name: "speciesAlias", internalType: "string" },
          { type: "string", name: "scientificName", internalType: "string" },
          { type: "uint256", name: "density", internalType: "uint256" },
          { type: "uint256", name: "size", internalType: "uint256" },
          { type: "uint256", name: "decimals", internalType: "uint256" },
          { type: "uint256", name: "TCO2perSecond", internalType: "uint256" },
          { type: "uint256", name: "TCO2perYear", internalType: "uint256" },
          { type: "uint256", name: "landId", internalType: "uint256" },
          { type: "uint256", name: "creationDate", internalType: "uint256" },
          { type: "uint256", name: "updateDate", internalType: "uint256" },
        ],
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "string", name: "speciesAlias", internalType: "string" },
      { type: "string", name: "scientificName", internalType: "string" },
      { type: "uint256", name: "density", internalType: "uint256" },
      { type: "uint256", name: "size", internalType: "uint256" },
      { type: "uint256", name: "decimals", internalType: "uint256" },
      { type: "uint256", name: "TCO2perSecond", internalType: "uint256" },
      { type: "uint256", name: "TCO2perYear", internalType: "uint256" },
      { type: "uint256", name: "landId", internalType: "uint256" },
      { type: "uint256", name: "creationDate", internalType: "uint256" },
      { type: "uint256", name: "updateDate", internalType: "uint256" },
    ],
    name: "species",
    inputs: [
      { type: "uint256", name: "", internalType: "uint256" },
      { type: "uint256", name: "", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint8", name: "", internalType: "enum State" }],
    name: "stateOf",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "supportsInterface",
    inputs: [{ type: "bytes4", name: "interfaceId", internalType: "bytes4" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "symbol",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "timestampDifference",
    inputs: [
      { type: "uint256", name: "timestamp1", internalType: "uint256" },
      { type: "uint256", name: "timestamp2", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "tokenURI",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalLandOwnedOf",
    inputs: [{ type: "address", name: "landOwner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalLands",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalPoints",
    inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalPointsOf",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalSpecies",
    inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalSpeciesOf",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalVCUBySpecies",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      { type: "uint256", name: "index", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalVCUSEmitedBy",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferFrom",
    inputs: [
      { type: "address", name: "from", internalType: "address" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferOwnership",
    inputs: [{ type: "address", name: "newOwner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "updateLandState",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      { type: "uint8", name: "_state", internalType: "enum State" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "updateName",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      { type: "string", name: "newName", internalType: "string" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "updatePoint",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      { type: "uint256", name: "pointIndex", internalType: "uint256" },
      {
        type: "tuple",
        name: "point",
        internalType: "struct GeoSpatialPoint",
        components: [
          { type: "int256", name: "latitude", internalType: "int256" },
          { type: "int256", name: "longitude", internalType: "int256" },
          { type: "uint256", name: "decimals", internalType: "uint256" },
          { type: "uint256", name: "creationDate", internalType: "uint256" },
          { type: "uint256", name: "updateDate", internalType: "uint256" },
        ],
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "updateSpecies",
    inputs: [
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      { type: "uint256", name: "speciesIndex", internalType: "uint256" },
      {
        type: "tuple",
        name: "_species",
        internalType: "struct Species",
        components: [
          { type: "string", name: "speciesAlias", internalType: "string" },
          { type: "string", name: "scientificName", internalType: "string" },
          { type: "uint256", name: "density", internalType: "uint256" },
          { type: "uint256", name: "size", internalType: "uint256" },
          { type: "uint256", name: "decimals", internalType: "uint256" },
          { type: "uint256", name: "TCO2perSecond", internalType: "uint256" },
          { type: "uint256", name: "TCO2perYear", internalType: "uint256" },
          { type: "uint256", name: "landId", internalType: "uint256" },
          { type: "uint256", name: "creationDate", internalType: "uint256" },
          { type: "uint256", name: "updateDate", internalType: "uint256" },
        ],
      },
    ],
  },
];