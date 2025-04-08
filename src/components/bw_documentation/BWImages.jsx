import './BWDocumentation.css';
import categories from '../../assets/bookwyrm/categories.avif';
import cart from '../../assets/bookwyrm/cart.avif';
import deals from '../../assets/bookwyrm/deals.avif';
import footer from '../../assets/bookwyrm/footer.avif';
import login from '../../assets/bookwyrm/login.avif';
import manage from '../../assets/bookwyrm/manage.avif';
import panel from '../../assets/bookwyrm/panel.avif';
import search from '../../assets/bookwyrm/search.avif';
import sort from '../../assets/bookwyrm/sort.avif';
import newtab from '../../assets/svgs/newtab2.svg';

const imageList = [
  { preview: categories, filename: 'categories.avif', alt: 'Categories' },
  { preview: cart, filename: 'cart.avif', alt: 'Cart' },
  { preview: deals, filename: 'deals.avif', alt: 'Deals' },
  { preview: footer, filename: 'footer.avif', alt: 'Footer' },
  { preview: login, filename: 'login.avif', alt: 'Login' },
  { preview: manage, filename: 'manage.avif', alt: 'Manage' },
  { preview: panel, filename: 'panel.avif', alt: 'Panel' },
  { preview: search, filename: 'search.avif', alt: 'Search' },
  { preview: sort, filename: 'sort.avif', alt: 'Sort' }
];
  
  const BWImages = () => {
    const handleClick = (filename) => {
      const fullSizeURL = `/bookwyrmimgs/${filename}`; // from public folder
      window.open(fullSizeURL, '_blank');
    };

    return (
      <div className="bw-part">
        <h2 className="bw-h2-lower">Some images from the project</h2>
        <div className="bw-images">
          {imageList.map((img, index) => (
            <div className="bw-imgs-item" onClick={() => handleClick(img.filename)}>
              <div className="bw-img-cont">
                <div className="bw-img-open-link">Open<img src={newtab} alt="open new tab" className="bw-open-arrow" /></div>
                <img
                key={index}
                src={img.preview}
                alt={img.alt}
                className="bw-img"
                />
              </div>
              <h4 className="bw-img-name">{img.alt}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BWImages;