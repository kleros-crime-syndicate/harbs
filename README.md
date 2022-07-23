<p align="center">
  <a href="https://harbs.netlify.app">
    <img alt="FIXME" src="https://raw.githubusercontent.com/kleros-crime-syndicate/harbs/master/interface/src/assets/harbs.svg" width="256">
  </a>
</p>

<p align="center">
  <i style="font-size: 28px;"> Harbringer Ads</i>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/harbs/deploys"><img src="https://api.netlify.com/api/v1/badges/94d8c812-23b1-4d95-a56e-b4831f101f1a/deploy-status" alt="Netlify Build Status"></a>
  </br>
  <a href="https://github.com/kleros/kleros-v2/actions/workflows/contracts-testing.yml"><img src="https://github.com/kleros/kleros-v2/actions/workflows/contracts-testing.yml/badge.svg?branch=master" alt="Unit testing"></a>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen Friendly"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with Prettier"></a>
</p>

---

## Toolchain:

- Solidity 0.8
- Hardhat
- Ethers
- TheGraph
- Polygon Mumbai testnet
- Waffle
- Typescript
- Node 16
- Yarn 3 without [PlugnPlay](https://yarnpkg.com/getting-started/migration/#switching-to-plugnplay)


## Getting Started

#### Install the dependencies

```bash
$ npm install -g depcheck

# sets up yarn version
$ yarn prepare

$ yarn install
```

## Repo Structure

Each directory at the root of this repository contains code for each individual part that enables this integration:

- **`interface/`**: Web front-end [Learn more](interface/README.md).
  - *Notice: while this is a centralized service, it exists only for convenience. Anyone can fulfill the role of the bots if they wish to do so.*
- **`contracts/`**: Smart contracts layer [Learn more](contracts/README.md).
- **`subgraph/`**: TheGraph middleware for transactions indexing [Learn more](subgraph/README.md).

## Deployment

See the address inside [the deployment artifacts](contracts/deployments/mumbai).