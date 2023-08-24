import ItemsDisplay from "./ItemsDisplay";
import door from "../../assets/images/door.jpg"
import wardrobe from "../../assets/images/wardrobe.jpg"
import shelf from "../../assets/images/shelf.jpg"
function HomePage_section2() {
  const sampleItems = [
    {
      id: 1,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 2,
      type: "Wardrobe",
      name: "wooden wardrobe ",
      stock: "1000+",
      description: "Modern Style Wardrobe BASIC 4 doors 2 drawers Wooden Home Bedroom Furniture Particleboard",
      image:wardrobe
    },
    {
      id: 3,
      type: "Shelf",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:shelf
      },
    {
      id: 4,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 5,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 6,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 7,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 8,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 9,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 10,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 11,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 12,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 13,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 14,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },
    {
      id: 15,
      type: "Door",
      name: "Waterproof Soundproof Internal Wood Door ",
      stock: "1000+",
      description: "New Interior Room Water Proof Door Design Waterproof Internal Wood Door Hotel Soundproof Bedroom Door",
      image:door
    },

  ];
  return (
    <div className="home-page-section2">
      <ItemsDisplay items={sampleItems} />
      {/* <div className="adv-section"></div> */}
      <ItemsDisplay items={sampleItems} />
      <div className="load-more">
        <span>
          <a>Load more ...</a>
        </span>
      </div>
      <div className="adv-section"></div>
    </div>
  );
}

export default HomePage_section2;
