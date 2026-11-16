CREATE TABLE public.contact_submissions (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    visitor_id uuid REFERENCES public.site_visitors (visitor_id)
        ON DELETE SET NULL,
    full_name text NOT NULL,
    email_address text NOT NULL,
    contact_message text NOT NULL,
    company text,
    created_at timestamptz NOT NULL DEFAULT now()
);
