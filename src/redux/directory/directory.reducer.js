const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://imgs.search.brave.com/jt3rxOpTEfX_YzQkWXzh3xtmvEJ1gyev7EtNnq7nt2o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NS8xMy8xMi80MC9m/YXNoaW9uLTIzMDk1/MTlfNjQwLmpwZw",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://imgs.search.brave.com/VRvTteuU0wC4HHvZJB6U0R3FPhnxgq9aOinOWowdXs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RiLzAy/L2JjL2RiMDJiYzY4/OTgwN2FkOWE0MzU4/ODUzNTdlOTQwMzA1/LmpwZw",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://imgs.search.brave.com/s4yo4LJATCKNgFS6nRsD79zNhiAHMn6nrH6jz4VLVWc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczLzM3/LzExLzczMzcxMTMz/NGRjMWMzMWMwMWQ4/MWU2NWUxYjRlM2Zk/LmpwZw",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://imgs.search.brave.com/IZB9dRf4jQ3ckgG6Ki8fJHywc5HtelLy_cImLI5dZNU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9leGNpdGVkLWJl/YXV0aWZ1bC13b21h/bi13ZWFyaW5nLWRy/ZXNzLXN1bmdsYXNz/ZXMtaG9sZGluZy1z/aG9wcGluZy1iYWdz/LWZhc2hpb24tc2hv/cHBpbmctY29uY2Vw/dF84OTc0NTktNTE4/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
      id: 4,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://imgs.search.brave.com/R60lmqE7Udka436eAirb2PzNvhHef4-9L6b54EEG1Nw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/YWlsb3JlZC1zdWl0/LWZhc2hpb24tcGhv/dG9ncmFwaHlfMTQw/OS02NzI5LmpwZz9z/aXplPTYyNiZleHQ9/anBn",
      id: 5,
      size: "large",
      linkUrl: "shop/mens",
    },
],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
