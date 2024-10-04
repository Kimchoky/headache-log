
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://olmitpvlzklkqhnoamiy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey ?? '')
// supabase.from('halog')
// .select('*')


const v1 = process.env.VITE_ENV
const v2 = process.env.SUPABASE_ANON
const v3 = import.meta.env.VITE_ENV
const v4 = import.meta.env.SUPABASE_ANON


console.log('#1', v1);
console.log('#2', v2);
console.log('#3', v3);
console.log('#4', v4);


export async function load() {
    return {
        v: 'LOAD',
        v1,v2,v3,v4
    }
}