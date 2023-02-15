import React, { useEffect, useState } from 'react'
import ArmorDetail from './ArmorDetail'
import "./card.css";


const IronManArmors = () => {

    const [armorId, setarmorId] = useState("");
    const [mk1, setmk1] = useState(false);
    const [classic, setclassic] = useState(false);
    const [stealth, setstealth] = useState(false);
    const [space, setspace] = useState(false);
    const [deepsea, setdeepsea] = useState(false);
    const [unit, setunit] = useState(false);
    const [silver, setsilver] = useState(false);
    const [modular, setmodular] = useState(false);
    const [extremis, setextremis] = useState(false);
    const [model42, setmodel42] = useState(false);
    const [hulkbuster, sethulkbuster] = useState(false);
    const [endo, setendo] = useState(false);
    const [edge, setedge] = useState(false);


    useEffect(() => {
        armorId === "mk1" ? setmk1(true) : setmk1(false);
        armorId === "classic" ? setclassic(true) : setclassic(false);
        armorId === "space" ? setspace(true) : setspace(false);
        armorId === "stealth" ? setstealth(true) : setstealth(false);
        armorId === "deepsea" ? setdeepsea(true) : setdeepsea(false);
        armorId === "silver" ? setsilver(true) : setsilver(false);
        armorId === "unit" ? setunit(true) : setunit(false);
        armorId === "modular" ? setmodular(true) : setmodular(false);
        armorId === "extremis" ? setextremis(true) : setextremis(false);
        armorId === "model42" ? setmodel42(true) : setmodel42(false);
        armorId === "hulkbuster" ? sethulkbuster(true) : sethulkbuster(false);
        armorId === "endo" ? setendo(true) : setendo(false);
        armorId === "edge" ? setedge(true) : setedge(false);
    }, [armorId]);

    const handleClickScroll = (armor) => {
        setarmorId(armor)
        const element = document.getElementById('section-1');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div>
            <div className='flex text-center p-4'>
                <p><b>Iron Man Armor: </b> As Tony levels up, he unlocks a long variety of armors. Each of these armors have their unique skills, abilities, and powers, that compliment those of Tony. These armors can be damaged, or even destroyed during battle, but he can always repair them. To prevent armors from destroying, Tony must change his armor when he considers is necessary. These armors are classified by different categories. Iron Man can only pick one armor for each category.</p>
                <p><b>Click on an armor's name to check it out! </b> </p>
                <div className='d-none d-lg-block'>
                    <div className='row'>
                        <div className='col'>
                            <p><b>1st Category: Unlocked at level 1</b></p>
                            <p class="armor-text" onClick={() => handleClickScroll("mk1")}>Model 1 Mk 1</p>
                            <p><b>2nd Category: Unlocked at level 2</b></p>
                            <p class="armor-text" onClick={() => handleClickScroll("classic")}>Classic Armor</p>
                            <p><b>3rd Category: Unlocked at level 5</b></p>
                            <p class="armor-text" onClick={() => handleClickScroll("stealth")}>Stealth Armor</p>
                            <p class="armor-text" onClick={() => handleClickScroll("space")}> Space Armor</p>
                            <p class="armor-text" onClick={() => handleClickScroll("deepsea")}>Deep Sea Armor</p>
                        </div>

                        <div className='col'>
                            <p><b>4th Category: Unlocked at level 10</b></p>
                            <p class="armor-text" onClick={() => handleClickScroll("unit")}>Neuromimetic Telepresence Unit</p>
                            <p class="armor-text" onClick={() => handleClickScroll("silver")}>Silver Centurion Armor</p>
                            <p class="armor-text" onClick={() => handleClickScroll("modular")}>Modular Armor</p>
                            <p><b>5th Category: Unlocked at level 15</b></p>
                            <p class="armor-text" onClick={() => handleClickScroll("extremis")}>Extremis Armor</p>
                            <p class="armor-text" onClick={() => handleClickScroll("model42")}>Armor 616</p>
                        </div>

                        <div className='col'>
                            <p><b>6th Category: Unlocked at level 17</b></p>
                            <p class="armor-text" onClick={() => handleClickScroll("hulkbuster")}>Hulkbuster Armor</p>
                            <p class="armor-text" onClick={() => handleClickScroll("endo")}>Endo Symbiotic Armor</p>
                            <p><b>7th Category: Unlocked at level 20</b></p>
                            <p class="armor-text" onClick={() => handleClickScroll("edge")}>Bleeding Edg Armor</p>
                        </div>
                    </div>
                </div>
                <div className='d-lg-none d-xl-none'>
                    <div className='row'>
                        <div className='col'>
                            <p><b>1st Category: Unlocked at level 1</b></p>
                            <p class="armor-text" onClick={() => setarmorId("mk1")}>Model 1 Mk 1</p>
                            <p><b>2nd Category: Unlocked at level 2</b></p>
                            <p class="armor-text" onClick={() => setarmorId("classic")}>Classic Armor</p>
                            <p><b>3rd Category: Unlocked at level 5</b></p>
                            <p class="armor-text" onClick={() => setarmorId("stealth")}>Stealth Armor</p>
                            <p class="armor-text" onClick={() => setarmorId("space")}> Space Armor</p>
                            <p class="armor-text" onClick={() => setarmorId("deepsea")}>Deep Sea Armor</p>
                            <p><b>4th Category: Unlocked at level 10</b></p>
                            <p class="armor-text" onClick={() => setarmorId("unit")}>Neuromimetic Telepresence Unit</p>
                            <p class="armor-text" onClick={() => setarmorId("silver")}>Silver Centurion Armor</p>
                            <p class="armor-text" onClick={() => setarmorId("modular")}>Modular Armor</p>
                        </div>

                        <div className='col'>
                            <p class="armor-text" onClick={() => setarmorId("extremis")}>Extremis Armor</p>
                            <p class="armor-text" onClick={() => setarmorId("model42")}>Armor 616</p>
                            <p class="armor-text">Armor 616</p>
                            <p><b>6th Category: Unlocked at level 17</b></p>
                            <p class="armor-text" onClick={() => setarmorId("hulkbuster")}>Hulkbuster Armor</p>
                            <p class="armor-text" onClick={() => setarmorId("endo")}>Endo Symbiotic Armor</p>
                            <p><b>7th Category: Unlocked at level 20</b></p>
                            <p class="armor-text" onClick={() => setarmorId("edge")}>Bleeding Edg Armor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='section-1'>
                {mk1 && <ArmorDetail id={"63ebcb6c1803a98ca0ab1615"}></ArmorDetail>}
                {classic && <ArmorDetail id={"63ebfd161803a98ca0ab17ae"}></ArmorDetail>}
                {stealth && <ArmorDetail id={"63ebfe611803a98ca0ab17c0"}></ArmorDetail>}
                {space && <ArmorDetail id={"63ebffb51803a98ca0ab17c8"}></ArmorDetail>}
                {deepsea && <ArmorDetail id={"63ec03f31803a98ca0ab1803"}></ArmorDetail>}
                {unit && <ArmorDetail id={"63ec051f1803a98ca0ab180e"}></ArmorDetail>}
                {silver && <ArmorDetail id={"63ec061b1803a98ca0ab1815"}></ArmorDetail>}
                {modular && <ArmorDetail id={"63ec078c33e06b50e488662f"}></ArmorDetail>}
                {extremis && <ArmorDetail id={"63ec08a333e06b50e4886641"}></ArmorDetail>}
                {model42 && <ArmorDetail id={"63ec094d33e06b50e4886649"}></ArmorDetail>}
                {hulkbuster && <ArmorDetail id={"63ec0b6a33e06b50e4886658"}></ArmorDetail>}
                {endo && <ArmorDetail id={"63ec0a8833e06b50e4886654"}></ArmorDetail>}
                {edge && <ArmorDetail id={"63ec0d1b33e06b50e4886664"}></ArmorDetail>}
            </div>
        </div>
    )
}

export default IronManArmors