How to Use this Library 

# Step 1.  install our library in React Application
npm i @vmurali100/josys-button

# Step 2. Import  as following in React Component wherever it is required

import { Button } from '@vmurali100/josys-button'

# Step 3. Create required Props as follows 

 const args = {
    label: 'Add',
    style: {
      padding: '4px 8px',
      margin: '10px',
      color: 'white',
      fontSize: '0.875rem',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '4px',
      lineHeight: '1.75',
      background: '#0C6CFC',
      minWidth: '64px',
      fontWeight: `'700'`,
    },
    onClick: handleClick,
  }

  # Step 4. Use Imported Component as Follows

  <Button label={args.label} style={args.style} onClick={args.onClick} />
