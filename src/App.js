import React from 'react';


function Food({name,picture}){
    console.log({name})
    return (
        <div>
            <h1>I like {name}</h1>
            <img width="100" height="100" src={picture} alt={name}/>
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name: 'kimchi',
        image: 'https://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=500:*&_v=20210111143615'
    },
    {
        id: 2,
        name: 'pizza',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    },
    {
        id: 3,
        name: 'kimbap',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg'
    }
];

/*function renderFood(disk){
    return <Food name={disk.name} picture={disk.image} />;
}*/

function App( ){
  return(
    <div>
        {foodILike.map(dish =>
            /*key props는 리엑트 내부에서 사용되는 특수한props여서 Food컴포넌트에 직접 전달되지는 않는다.*/
            <Food key={dish.id} name={dish.name} picture={dish.image} />)}

    </div>
  )
}

export default App;
