export interface Guest {
    id: string;
    full_name: string;
    email?: string;
    rsvp_status?: string;
    rsvp_date?: string;
}

export interface Party {
    id: string;
    guests: Guest[];
} 