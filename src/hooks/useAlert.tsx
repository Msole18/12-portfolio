import { useState } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState<{ show: boolean; text: string; type: 'danger' | 'success' }>({
    show: false,
    text: '',
    type: 'success',
  });

  const showAlert = (alert: { show: boolean; text: string; type: 'danger' | 'success' }) => {
    setAlert(alert);
  };

  const hideAlert = () => { 
    setAlert({ show: false, text: '', type: 'success' }) 
  }

  return { alert, showAlert, hideAlert };

};
