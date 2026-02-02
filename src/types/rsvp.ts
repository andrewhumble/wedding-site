export interface Guest {
    id: string;
    title?: string;
    full_name: string;
    email?: string;
    rsvp_status?: string;
    rsvp_date?: string;
    meal_preference?: 'Beef' | 'Chicken';
}

export interface Party {
    id: string;
    guests: Guest[];
} 