CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE post (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID REFERENCES user(id) ON DELETE CASCADE NOT NULL,
  post_content TEXT NOT NULL,
  likes INT DEFAULT 0,
  comment_count INT DEFAULT 0,
  shares_count INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)


CREATE TABLE comment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES post(id) ON DELETE CASCADE NOT NULL,
  comment_content TEXT NOT NULL,
  comment_author REFERENCES user(id) ON DELETE NOT NULL,
  replies_count INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)

CREATE TRIGGER handle_updated_at
BEFORE UPDATE ON post
FOR EACH ROW
EXECUTE PROCEDURE handle_updated_at();

CREATE TRIGGER handle_updated_at
BEFORE UPDATE ON comment
FOR EACH ROW
EXECUTE PROCEDURE handle_updated_at();