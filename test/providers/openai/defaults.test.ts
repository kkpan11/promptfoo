import { describe, expect, it } from '@jest/globals';
import {
  DefaultEmbeddingProvider,
  DefaultGradingJsonProvider,
  DefaultGradingProvider,
  DefaultModerationProvider,
  DefaultSuggestionsProvider,
} from '../../../src/providers/openai/defaults';

describe('OpenAI default providers', () => {
  describe('DefaultEmbeddingProvider', () => {
    it('should use correct model version', () => {
      expect(DefaultEmbeddingProvider.modelName).toBe('text-embedding-3-large');
      expect(DefaultEmbeddingProvider.id()).toBe('openai:text-embedding-3-large');
    });
  });

  describe('DefaultGradingProvider', () => {
    it('should use correct model version and configuration', () => {
      expect(DefaultGradingProvider.modelName).toBe('gpt-4.1-2025-04-14');
      expect(DefaultGradingProvider.id()).toBe('openai:gpt-4.1-2025-04-14');
      expect(DefaultGradingProvider.config).toEqual({});
    });
  });

  describe('DefaultGradingJsonProvider', () => {
    it('should use correct model version and JSON configuration', () => {
      expect(DefaultGradingJsonProvider.modelName).toBe('gpt-4.1-2025-04-14');
      expect(DefaultGradingJsonProvider.id()).toBe('openai:gpt-4.1-2025-04-14');
      expect(DefaultGradingJsonProvider.config).toEqual({
        response_format: { type: 'json_object' },
      });
    });
  });

  describe('DefaultSuggestionsProvider', () => {
    it('should use correct model version', () => {
      expect(DefaultSuggestionsProvider.modelName).toBe('gpt-4.1-2025-04-14');
      expect(DefaultSuggestionsProvider.id()).toBe('openai:gpt-4.1-2025-04-14');
      expect(DefaultSuggestionsProvider.config).toEqual({});
    });
  });

  describe('DefaultModerationProvider', () => {
    it('should use correct model version', () => {
      expect(DefaultModerationProvider.modelName).toBe('omni-moderation-latest');
      expect(DefaultModerationProvider.id()).toBe('openai:omni-moderation-latest');
    });
  });
});
