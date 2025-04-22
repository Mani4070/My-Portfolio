import React, { useState, useEffect } from "react";
import { Button, useMediaQuery, useTheme, Container, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect and section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Get all sections
      const sections = ["home", "about", "skills", "services", "projects", "certificates", "contact"];
      
      // Find the current section
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ?"#0d1224":'transparent',
      boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease-in-out'
    }}>
      <Container className="navbar" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo" style={{
          color:  '#fff',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}>Portfolio</div>

        {!isMobile ? (
          <ul className="nav-links" style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#home" style={{ color: activeSection === 'home' ? '#48aaff' : '#fff', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#about" style={{ color: activeSection === 'about' ? '#48aaff' : '#fff', textDecoration: 'none' }}>About</a></li>
            <li><a href="#skills" style={{ color: activeSection === 'skills' ? '#48aaff' : '#fff', textDecoration: 'none' }}>Skills</a></li>
            <li><a href="#services" style={{ color: activeSection === 'services' ? '#48aaff' : '#fff', textDecoration: 'none' }}>Services</a></li>
            <li><a href="#projects" style={{ color: activeSection === 'projects' ? '#48aaff' : '#fff', textDecoration: 'none' }}>Projects</a></li>
            <li><a href="#certificates" style={{ color: activeSection === 'certificates' ? '#48aaff' : '#fff', textDecoration: 'none' }}>Certificates</a></li>
            <li><a href="#contact" style={{ color: activeSection === 'contact' ? '#48aaff' : '#fff', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        ) : (
          <Button onClick={toggleSidebar} style={{ color: '#fff' }}>
            <MenuIcon />
          </Button>
        )}

        {/* Sidebar Drawer for Mobile */}
        <Drawer
          anchor="left"
          open={openSidebar}
          onClose={toggleSidebar}
          variant="temporary"
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 250,
              backgroundColor: "#0d1224",
              color: "#fff",
              border: "none",
              transition: "all 0.3s ease",
              padding: "20px 0",
              boxShadow: "2px 0 5px rgba(0,0,0,0.2)"
            },
          }}
        >
          <List sx={{ width: '100%' }}>
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'certificates', label: 'Certificates' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <ListItem
                key={item.id}
                component="a"
                href={`#${item.id}`}
                onClick={toggleSidebar}
                sx={{
                  padding: "12px 24px",
                  color: activeSection === item.id ? '#48aaff' : '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#48aaff',
                    backgroundColor: 'rgba(72, 170, 255, 0.1)',
                    transform: 'translateX(5px)'
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '1.1rem',
                      fontWeight: activeSection === item.id ? 600 : 400
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </nav>
  );
};

export default Navbar;
