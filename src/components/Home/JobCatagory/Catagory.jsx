

const Catagory = ({image, Title, Descripton}) => {
    return (
        <div className="bg-gradient-to-l from-Start5 to-End5  rounded-lg p-10 flex-grow">
            <img className="bg-gradient-to-l from-Start10 to-End10  rounded-lg p-2" src={image} alt="" />
            <h3 className="font-extrabold text-xl mt-8 mb-2">{Title}</h3>
            <p className="font-medium text-subtite">{Descripton}</p>
        </div>
    );
};

export default Catagory;