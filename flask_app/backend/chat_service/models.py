# CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
from sqlalchemy import Integer, Text


# CREATE TABLE messages (
#   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
#   message_content TEXT NOT NULL,
#   sender_id REFERENCES user(id) ON DELETE CASCADE NOT NULL,
#   receiver_id REFERENCES user(id) ON DELETE CASCADE NOT NULL,
#   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
#   updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
# )

# CREATE TRIGGER handle_updated_at
# BEFORE UPDATE ON messages
# FOR EACH ROW
# EXECUTE PROCEDURE handle_updated_at();
