import React from 'react';

import { Chip } from './';

export const PendingStatus = () => (
  <Chip title="Pendente" color="#FF0000" />
);
  
export const DeliveredStatus = () => (
  <Chip title="Entregue" color="#038C00" />
);