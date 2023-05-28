import { React, createContext, useState, useContext } from 'react';

const API_BASE_URL = 'http://localhost:5000/api/v1';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [keywordLinks, setKeywordLinks] = useState([]);

  const fetchAllLinks = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/links`);
      if (response.ok) {
        const data = await response.json();
        setLinks(data);
      } else {
        alert('Error Fetching Links from API');
      }
    } catch (error) {
      alert('Error Fetching Links', error);
    }
  };

  const fetchLinksByKeyword = async (keyword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/links/keyword/${keyword}`);
      if (response.ok) {
        const data = await response.json();
        setKeywordLinks(data);
      } else {
        alert('Error Fetching Links by Keyword from API');
      }
    } catch (error) {
      alert('Error Fetching Links by Keyword');
    }
  };

  const addLink = async (newLink) => {
    try {
      const response = await fetch(`${API_BASE_URL}/links`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLink),
      });
      if (response.ok) {
        const data = await response.json();
        setLinks((prevLinks) => [...prevLinks, data]);
      } else {
        alert('Error Adding Link to API');
      }
    } catch (error) {
      alert('Error Adding Link');
    }
  };

  const updateLink = async (id, updatedLink) => {
    try {
      const response = await fetch(`${API_BASE_URL}/links/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLink),
      });
      if (response.ok) {
        const data = await response.json();
        setLinks((prevLinks) =>
          prevLinks.map((link) => (link._id === id ? { ...link, ...data } : link))
        );
      } else {
        alert('Error Updating Link');
      }
    } catch (error) {
      alert('Error Updating Link');
    }
  };

  const deleteLink = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/links/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setLinks((prevLinks) => prevLinks.filter((link) => link._id !== id));
      } else {
        alert('Error Deleting Link from API');
      }
    } catch (error) {
      alert('Error Deleting Link');
    }
  };

  return (
    <ApiContext.Provider
      value={{
        links,
        keywordLinks,
        fetchAllLinks,
        fetchLinksByKeyword,
        addLink,
        updateLink,
        deleteLink,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
