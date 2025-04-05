import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToElement = (elementId) => {
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${elementId}`);
    } else {
      scrollToElementById(elementId);
    }
  };
  
  // Separate function to handle smooth scrolling with an offset
  const scrollToElementById = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 120; // Adjust this value based on your navbar height or margin needs
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };
  
  // Apply the same logic when the page loads
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
  
    if (scrollTo) {
      setTimeout(() => {
        scrollToElementById(scrollTo);
      }, 100); // Small delay to allow rendering
    }
  }, [location]);

  return (
    <NavigationContext.Provider value={{ scrollToElement }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);