import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://imgs.search.brave.com/jt3rxOpTEfX_YzQkWXzh3xtmvEJ1gyev7EtNnq7nt2o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NS8xMy8xMi80MC9m/YXNoaW9uLTIzMDk1/MTlfNjQwLmpwZw",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://imgs.search.brave.com/VRvTteuU0wC4HHvZJB6U0R3FPhnxgq9aOinOWowdXs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RiLzAy/L2JjL2RiMDJiYzY4/OTgwN2FkOWE0MzU4/ODUzNTdlOTQwMzA1/LmpwZw",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://imgs.search.brave.com/s4yo4LJATCKNgFS6nRsD79zNhiAHMn6nrH6jz4VLVWc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczLzM3/LzExLzczMzcxMTMz/NGRjMWMzMWMwMWQ4/MWU2NWUxYjRlM2Zk/LmpwZw",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            "https://imgs.search.brave.com/tgwZOLGBtYNJq6esdNosyJ4rEdi3eP-m8-cAMcoX5KM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9zdHls/ZS1wb2ludHMtdW5k/ZXJjb25zdW1wdGlv/bi1jb3JlMi0xLTY3/MGZlMTZkOTM4YTQu/anBnP2Nyb3A9MC41/MDJ4dzoxLjAweGg7/MC4yNTB4dywwJnJl/c2l6ZT0zNjA6Kg",
          id: 4,
          size: "large",
        },
        {
          title: "mens",
          imageUrl:
            "https://imgs.search.brave.com/IWLph3NE5Ls3NzmK77y0LnhUj8X7Z1T5sXrZ1DGG6wA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGFi/aWxpdHktaW1hZ2Vz/LXVwbG9hZC5zMy5h/bWF6b25hd3MuY29t/L3YxX3R4dDJpbWdf/Y2Y3OWIwZGUtNTBh/Zi00MmYxLWFiZjMt/MDc5MmI1ZjZiOGZh/LnBuZw",
          id: 5,
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
