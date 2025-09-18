'use client';
import {
  createContext,
  useContext,
  useRef,
  RefObject,
  ReactNode,
} from 'react';

type ContactContextType = {
  scrollToContact: () => void;
  contactRef: RefObject<HTMLDivElement | null>; // ✅ allow null here
};

const ContactContext = createContext<ContactContextType | null>(null);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) throw new Error("useContact must be used within ContactProvider");
  return context;
};

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const contactRef = useRef<HTMLDivElement | null>(null); // ✅ matches above

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ContactContext.Provider value={{ scrollToContact, contactRef }}>
      {children}
    </ContactContext.Provider>
  );
};
