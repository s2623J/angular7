export class Contact {
    id!:        number;
    firstname!: string;
    lastname!:  string;
    gender:     string = 'Male';
    email!:     string;
    phone!:     string;
    dob?:       string; 
    picture?:   string;
    city?:      string;
    state?:     string;
    country?:   string;
}
// The question mark means that this is an optional value