export interface ProfileData {
    role: string;
    years: string;
    name: string;
    imageUrl: string;
  }
  
  export async function fetchProfileData(): Promise<ProfileData> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return {
      role: 'UX Engineer',
      years: '5 yrs',
      name: 'Adam Cole',
      imageUrl: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    };
  }
  