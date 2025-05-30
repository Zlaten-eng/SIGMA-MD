<img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=50&pause=1000&color=FF0000&center=true&width=910&height=100&lines=THIS+IS+SIGMA-MD" alt="Typing SVG" />

<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=50&pause=1000&color=0000FF&center=true&width=910&height=100&lines=HOLLA+THIS+IS+SIGMA-MD;MULTI+DEVICE+WHATSAPP+BOT;MADE+TO+HELP+WHATSAPP+USERS;STAR+AND+FORK+THE+REPO;CREATED+BY+CONWAY" alt="Typing SVG" />

  ### 1. 𐃁GET SESSION ID𐃁 

`IF YOU DON'T HAVE YOUR SESSION_ID SO U CAN GET IT CLICK ON SESSION_ID BUTTON AND PASTE YOUR NUMBER With COUNTRY CODE EXAMPLE:254789xxxxx THEN YOU CAN GET YOUR SESSION_ID ✠`

>checkout bot website 
<a href='https://hacklink.nickykipruto.workers.dev/' target="_blank">
  <img alt='Bot website' src='https://img.shields.io/badge/Bot%20Website-orange?style=for-the-badge&logo=opencv&logoColor=black'/>
</a>
<br> 


> **1. PAIR CODE SESSION ID**

<a href='https://pairsite.nickykipruto.workers.dev/' target="_blank">
  <img alt='Pairing Code' src='https://img.shields.io/badge/Get%20Pairing%20Code-blue?style=for-the-badge&logo=opencv&logoColor=black'/>
</a>
<br> 
  
  

  </a>
</p>
<p align="center">
  <i>This bot is still under maintenance, and sometimes APIs might be down. Apologies for the inconvenience; we are working to make it better!</i>
</p>










## WORKFLOWS
to deploy on github workflows create a file under .github/workflows/deploy.yml

```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```
